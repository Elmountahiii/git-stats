import { NextResponse, NextRequest } from "next/server";
import {
	createErrorResponse,
	createSuccessResponse,
} from "@/app/types/http-response";

interface ContributionDay {
	contributionCount: number;
	date: string;
}

interface ContributionWeek {
	contributionDays: ContributionDay[];
}

interface GraphQLResponse {
	data?: {
		user: {
			contributionsCollection: {
				totalCommitContributions: number;
				restrictedContributionsCount: number;
				contributionCalendar: {
					totalContributions: number;
					weeks: ContributionWeek[];
				};
			};
			followers: {
				totalCount: number;
			};
		};
	};
	errors?: Array<{ message: string }>;
}

export interface UserStats {
	universalRank: string;
	longestStreak: number;
	totalCommits: number;
	mostActiveMonth: string;
}

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

const USER_STATS_QUERY = `
  query ($login: String!) {
    user(login: $login) {
      contributionsCollection {
        totalCommitContributions
        restrictedContributionsCount
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
      followers {
        totalCount
      }
    }
  }
`;

const calculateLongestStreak = (weeks: ContributionWeek[]): number => {
	const allDays: ContributionDay[] = [];
	for (const week of weeks) {
		for (const day of week.contributionDays) {
			allDays.push(day);
		}
	}

	allDays.sort(
		(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
	);

	let longestStreak = 0;
	let tempStreak = 0;

	for (const day of allDays) {
		if (day.contributionCount > 0) {
			tempStreak++;
			longestStreak = Math.max(longestStreak, tempStreak);
		} else {
			tempStreak = 0;
		}
	}

	return longestStreak;
};

const calculateMostActiveMonth = (weeks: ContributionWeek[]): string => {
	const monthContributions: Record<string, number> = {};

	for (const week of weeks) {
		for (const day of week.contributionDays) {
			const date = new Date(day.date);
			const monthName = date.toLocaleDateString("en-US", { month: "long" });

			if (!monthContributions[monthName]) {
				monthContributions[monthName] = 0;
			}
			monthContributions[monthName] += day.contributionCount;
		}
	}

	let mostActiveMonth = "N/A";
	let maxContributions = 0;

	for (const [month, count] of Object.entries(monthContributions)) {
		if (count > maxContributions) {
			maxContributions = count;
			mostActiveMonth = month;
		}
	}

	return mostActiveMonth;
};

const calculateUniversalRank = (
	totalContributions: number,
	followers: number,
): string => {
	// Score based on contributions and followers
	const score = totalContributions + followers * 2;

	// Approximate percentile based on typical GitHub user activity
	// These thresholds are estimates based on GitHub user distribution
	if (score >= 5000) return "Top 1%";
	if (score >= 2500) return "Top 5%";
	if (score >= 1000) return "Top 10%";
	if (score >= 500) return "Top 20%";
	if (score >= 250) return "Top 30%";
	if (score >= 100) return "Top 50%";
	if (score >= 50) return "Top 70%";
	return "Top 80%";
};

const fetchUserStats = async (username: string): Promise<UserStats> => {
	const response = await fetch(GITHUB_GRAPHQL_URL, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: USER_STATS_QUERY,
			variables: { login: username },
		}),
	});

	if (!response.ok) {
		throw new Error(`GitHub API request failed: ${response.statusText}`);
	}

	const result = (await response.json()) as GraphQLResponse;

	if (result.errors) {
		throw new Error(result.errors[0]?.message || "GraphQL query failed");
	}

	if (!result.data?.user) {
		throw new Error("User not found");
	}

	const user = result.data.user;
	const contributionsCollection = user.contributionsCollection;
	const calendar = contributionsCollection.contributionCalendar;

	const totalCommits =
		contributionsCollection.totalCommitContributions +
		contributionsCollection.restrictedContributionsCount;

	const longestStreak = calculateLongestStreak(calendar.weeks);
	const mostActiveMonth = calculateMostActiveMonth(calendar.weeks);
	const universalRank = calculateUniversalRank(
		calendar.totalContributions,
		user.followers.totalCount,
	);

	return {
		universalRank,
		longestStreak,
		totalCommits,
		mostActiveMonth,
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
		const stats = await fetchUserStats(username);

		return NextResponse.json(createSuccessResponse("success", stats));
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "Failed to fetch user stats";

		return NextResponse.json(createErrorResponse("failed", errorMessage), {
			status: 500,
		});
	}
}
