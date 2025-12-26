import { NextResponse, NextRequest } from "next/server";
import {
	createErrorResponse,
	createSuccessResponse,
} from "@/app/types/http-response";
import {
	CommitGraphQLResponse,
	CommitActivity,
	CommitActivityResponse,
} from "@/app/types/commit";

const COMMIT_ACTIVITY_QUERY = `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

const fetchCommitActivity = async (
	username: string,
): Promise<CommitActivityResponse> => {
	const response = await fetch("https://api.github.com/graphql", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: COMMIT_ACTIVITY_QUERY,
			variables: { login: username },
		}),
	});

	if (!response.ok) {
		throw new Error(`GitHub API request failed: ${response.statusText}`);
	}

	const result = (await response.json()) as CommitGraphQLResponse;

	if (result.errors) {
		throw new Error(result.errors[0]?.message || "GraphQL query failed");
	}

	if (!result.data?.user) {
		throw new Error("User not found");
	}

	const calendar =
		result.data.user.contributionsCollection.contributionCalendar;
	const weeks = calendar.weeks;

	const dailyActivity: CommitActivity[] = [];
	for (const week of weeks) {
		for (const day of week.contributionDays) {
			dailyActivity.push({
				date: day.date,
				commits: day.contributionCount,
			});
		}
	}

	dailyActivity.sort(
		(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
	);

	const weeklyActivity: { week: string; commits: number }[] = weeks.map(
		(week, index) => {
			const weekStart = week.contributionDays[0]?.date || `Week ${index + 1}`;
			const totalCommits = week.contributionDays.reduce(
				(sum, day) => sum + day.contributionCount,
				0,
			);
			return {
				week: weekStart,
				commits: totalCommits,
			};
		},
	);

	const monthlyMap = new Map<string, number>();
	for (const day of dailyActivity) {
		const date = new Date(day.date);
		const monthKey = date.toLocaleDateString("en-US", {
			month: "short",
			year: "numeric",
		});

		const existing = monthlyMap.get(monthKey) || 0;
		monthlyMap.set(monthKey, existing + day.commits);
	}

	const monthlyActivity = Array.from(monthlyMap.entries()).map(
		([month, commits]) => ({
			month,
			commits,
		}),
	);

	return {
		totalContributions: calendar.totalContributions,
		dailyActivity,
		weeklyActivity,
		monthlyActivity,
	};
};

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);
	const username = searchParams.get("username");

	if (!username || username.trim() === "") {
		return NextResponse.json(
			createErrorResponse("failed", "Username query parameter is required"),
			{ status: 400 },
		);
	}

	try {
		const commitActivity = await fetchCommitActivity(username);

		return NextResponse.json(createSuccessResponse("success", commitActivity));
	} catch (error) {
		const errorMessage =
			error instanceof Error
				? error.message
				: "Failed to fetch commit activity";

		return NextResponse.json(createErrorResponse("failed", errorMessage), {
			status: 500,
		});
	}
}
