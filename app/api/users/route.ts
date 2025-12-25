import { NextResponse, NextRequest } from "next/server";
import { GitHubUser } from "@/app/types/github-user";
import {
	createErrorResponse,
	createSuccessResponse,
} from "@/app/types/http-response";

const getUserData = async (username: string) => {
	const response = await fetch(`https://api.github.com/users/${username}`, {
		headers: {
			Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
			Accept: "application/vnd.github+json",
			"X-GitHub-Api-Version": "2022-11-28",
		},
	});
	if (!response.ok) {
		throw new Error("Failed to fetch user data");
	}
	const userData = (await response.json()) as GitHubUser;
	return userData;
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

	const userData = await getUserData(username);

	return NextResponse.json(createSuccessResponse("success", userData));
}
