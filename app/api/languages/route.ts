import { NextResponse, NextRequest } from "next/server";
import {
	createErrorResponse,
	createSuccessResponse,
} from "@/app/types/http-response";

interface LanguageNode {
	name: string;
	color: string;
}

interface LanguageEdge {
	size: number;
	node: LanguageNode;
}

interface RepositoryNode {
	name: string;
	languages: {
		edges: LanguageEdge[];
	};
}

interface GraphQLResponse {
	data?: {
		user: {
			repositories: {
				nodes: RepositoryNode[];
			};
		};
	};
	errors?: Array<{ message: string }>;
}

export interface LanguageStats {
	name: string;
	color: string;
	size: number;
	percentage: number;
}

const GITHUB_GRAPHQL_URL = "https://api.github.com/graphql";

const USER_LANGUAGES_QUERY = `
  query ($login: String!) {
    user(login: $login) {
      repositories(ownerAffiliations: OWNER, first: 100, isFork: false) {
        nodes {
          name
          languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
            edges {
              size
              node {
                name
                color
              }
            }
          }
        }
      }
    }
  }
`;

const fetchUserLanguages = async (
	username: string,
): Promise<LanguageStats[]> => {
	const response = await fetch(GITHUB_GRAPHQL_URL, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: USER_LANGUAGES_QUERY,
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

	const repositories = result.data.user.repositories.nodes;

	// Aggregate language sizes across all repositories
	const languageMap = new Map<string, { size: number; color: string }>();

	for (const repo of repositories) {
		for (const edge of repo.languages.edges) {
			const { name, color } = edge.node;
			const existing = languageMap.get(name);

			if (existing) {
				existing.size += edge.size;
			} else {
				languageMap.set(name, { size: edge.size, color: color || "#858585" });
			}
		}
	}

	// Calculate total size for percentage calculation
	const totalSize = Array.from(languageMap.values()).reduce(
		(sum, lang) => sum + lang.size,
		0,
	);

	// Convert to array and calculate percentages
	const languageStats: LanguageStats[] = Array.from(languageMap.entries())
		.map(([name, { size, color }]) => ({
			name,
			color,
			size,
			percentage: totalSize > 0 ? (size / totalSize) * 100 : 0,
		}))
		.sort((a, b) => b.size - a.size);

	return languageStats;
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
		const languageStats = await fetchUserLanguages(username);

		return NextResponse.json(createSuccessResponse("success", languageStats));
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "Failed to fetch language data";

		return NextResponse.json(createErrorResponse("failed", errorMessage), {
			status: 500,
		});
	}
}
