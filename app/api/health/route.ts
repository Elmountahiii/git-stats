import { NextResponse } from "next/server";
import {
	createErrorResponse,
	createSuccessResponse,
} from "@/app/types/http-response";

const validateToken = async () => {
	const token = process.env.GITHUB_ACCESS_TOKEN;

	if (!token || token.trim() === "") {
		throw new Error("GITHUB_ACCESS_TOKEN environment variable is not set");
	}

	const response = await fetch("https://api.github.com/user", {
		headers: {
			Authorization: `Bearer ${token}`,
			Accept: "application/vnd.github+json",
			"X-GitHub-Api-Version": "2022-11-28",
		},
	});

	if (response.status === 401) {
		throw new Error("Invalid GitHub access token");
	}

	if (response.status === 403) {
		throw new Error("GitHub access token forbidden or lacks permissions");
	}

	if (response.status === 429) {
		throw new Error("GitHub API rate limit exceeded");
	}

	if (!response.ok) {
		throw new Error("Failed to validate GitHub token");
	}

	return await response.json();
};

export async function GET() {
	try {
		const user = await validateToken();

		return NextResponse.json(
			createSuccessResponse("valid", {
				valid: true,
				user: { login: user.login, id: user.id },
			}),
		);
	} catch (error) {
		const errorMessage =
			error instanceof Error ? error.message : "Failed to validate token";

		const status = errorMessage.includes("not set")
			? 500
			: errorMessage.includes("rate limit")
				? 429
				: 401;

		return NextResponse.json(createErrorResponse("invalid", errorMessage), {
			status,
		});
	}
}
