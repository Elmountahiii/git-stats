import { NextResponse, NextRequest } from "next/server";
import {
	createErrorResponse,
	createSuccessResponse,
} from "@/app/types/http-response";
import { GitHubRepository } from "@/app/types/github-repository";

const fetchRepositories = async (username: string) => {
	const response = await fetch(
		`https://api.github.com/users/${username}/repos`,
		{
			headers: {
				Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
				Accept: "application/vnd.github+json",
				"X-GitHub-Api-Version": "2022-11-28",
			},
		},
	);
	if (!response.ok) {
		throw new Error("Failed to fetch user repositories");
	}
	const repositories = (await response.json()) as GitHubRepository[];
	return repositories;
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
		const repositories = await fetchRepositories(username);

		return NextResponse.json(createSuccessResponse("success", repositories));
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "Failed to fetch repositories";

		return NextResponse.json(createErrorResponse("failed", errorMessage), {
			status: 500,
		});
	}
}
