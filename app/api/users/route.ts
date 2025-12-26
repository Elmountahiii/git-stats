import { NextResponse, NextRequest } from "next/server";
import { GitHubUser } from "@/app/types/github-user";
import {
	createErrorResponse,
	createSuccessResponse,
} from "@/app/types/http-response";


const fetchUser = async (username: string) => {
	const response = await fetch(`https://api.github.com/users/${username}`, {
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			Accept: "application/vnd.github+json",
			"X-GitHub-Api-Version": "2022-11-28",
		},
	});
	if (!response.ok) {
		if (response.status === 404) {
			throw new Error("User not found");
		}
		if (response.status === 403) {
			throw new Error(
				"GitHub API rate limit exceeded. Please try again later.",
			);
		}
		throw new Error("Failed to fetch user data");
	}
	const user = (await response.json()) as GitHubUser;
	return user;
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
		const user = await fetchUser(username);

		return NextResponse.json(createSuccessResponse("success", user));
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "Failed to fetch user data";

		const status = errorMessage.includes("not found")
			? 404
			: errorMessage.includes("rate limit")
				? 429
				: 500;

		return NextResponse.json(createErrorResponse("failed", errorMessage), {
			status,
		});
	}
}
