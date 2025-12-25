import { NextResponse, NextRequest } from "next/server";
import {
	createErrorResponse,
	createSuccessResponse,
} from "@/app/types/http-response";
import { GitHubOrganization } from "@/app/types/organization";

const getUserOragnizations = async (username: string) => {
	const response = await fetch(
		`https://api.github.com/users/${username}/orgs`,
		{
			headers: {
				Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
				Accept: "application/vnd.github+json",
				"X-GitHub-Api-Version": "2022-11-28",
			},
		},
	);
	if (!response.ok) {
		throw new Error("Failed to fetch user organizations");
	}
	const organizations = (await response.json()) as GitHubOrganization[];
	return organizations;
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

	const userOrganizations = await getUserOragnizations(username);
	console.log(userOrganizations);

	return NextResponse.json(createSuccessResponse("success", userOrganizations));
}
