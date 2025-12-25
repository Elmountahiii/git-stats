import React from "react";
import Image from "next/image";
import { HttpResponse } from "@/app/types/http-response";
import { GitHubOrganization } from "@/app/types/organization";

interface OrganizationsProps {
	username: string;
}

const Organizations = async ({ username }: OrganizationsProps) => {
	const rawResponse = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/organizations?username=${username}`,
	);
	if (!rawResponse.ok) {
		throw new Error("Failed to fetch user oraganizations");
	}
	const response: HttpResponse<GitHubOrganization[]> = await rawResponse.json();
	const organizations = response.data;
	return (
		<div className="bg-card-dark rounded-2xl border border-gray-800 p-6 shadow-sm">
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-sm font-bold text-white uppercase tracking-wide">
					Organizations
				</h3>
				<span className="text-xs bg-surface text-text-secondary px-2 py-1 rounded-md">
					{organizations.length}
				</span>
			</div>
			<div className="flex gap-3">
				{organizations.map((org) => (
					<div
						key={org.id}
						title={org.login}
						className="w-12 h-12 rounded-xl bg-surface p-2 border border-gray-800 hover:border-primary/50 hover:shadow-md transition-all group"
					>
						<Image
							src={org.avatar_url}
							alt={org.login}
							width={48}
							height={48}
							className="w-full h-full object-contain rounded opacity-80 group-hover:opacity-100 transition-opacity"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Organizations;
