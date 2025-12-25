import React from "react";
import Image from "next/image";
import Organizations from "./Organizations";
import {
	BadgeCheck,
	MoveUpRight,
	Landmark,
	MapPin,
	AtSign,
	Languages,
	Calendar,
} from "lucide-react";
import { GitHubUser } from "@/app/types/github-user";

interface BasicInformationProps {
	username: string;
}

const BasicInformation: React.FC<BasicInformationProps> = async ({
	username,
}) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/users?username=${username}`,
	);
	if (!res.ok) {
		throw new Error("Failed to fetch user data");
	}
	const userData = (await res.json()) as GitHubUser;
	const joinedDate = new Date(userData.created_at).toLocaleDateString("en-US", {
		month: "long",
		year: "numeric",
	});

	const formatNumber = (num: number) => {
		if (num >= 1000000) {
			return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
		}
		if (num >= 1000) {
			return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
		}
		return num.toString();
	};

	return (
		<aside className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
			<div className="lg:sticky lg:top-24 flex flex-col gap-6">
				{/* Profile Card */}
				<div className="bg-card-dark rounded-2xl border border-gray-800 overflow-hidden shadow-sm relative">
					{/* Cover Area */}
					<div className="h-32 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent relative">
						<div
							className="absolute inset-0 bg-opacity-10"
							style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23137fec' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
							}}
						></div>
					</div>

					<div className="px-6 pb-6 -mt-16 relative">
						<div className="flex justify-center mb-4">
							<div className="relative group">
								<div className="w-32 h-32 p-1.5 bg-card-dark rounded-full shadow-lg ring-1 ring-white/5">
									<Image
										src={userData.avatar_url}
										alt="Profile"
										width={128}
										height={128}
										className="w-full h-full object-cover rounded-full"
									/>
								</div>
							</div>
						</div>

						<div className="text-center mb-6">
							<h1 className="text-2xl font-bold text-white mb-1">
								{userData.name}
							</h1>
							<div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
								<span>{username}</span>
								<BadgeCheck className="w-4 h-4" />
							</div>
						</div>

						<div className="text-text-secondary text-sm text-center leading-relaxed mb-6">
							{userData.bio}
						</div>

						<div className="grid grid-cols-3 gap-2 mb-6">
							<a
								href={`${userData.html_url}?tab=repositories`}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center p-2 rounded-xl bg-surface hover:bg-surface-hover transition-colors border border-gray-800 group"
							>
								<span className="text-lg font-bold text-white group-hover:text-primary transition-colors">
									{formatNumber(userData.public_repos)}
								</span>
								<span className="text-[10px] text-text-secondary font-medium uppercase tracking-wider">
									Repos
								</span>
							</a>
							<a
								href={`${userData.html_url}?tab=followers`}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center p-2 rounded-xl bg-surface hover:bg-surface-hover transition-colors border border-gray-800 group"
							>
								<span className="text-lg font-bold text-white group-hover:text-primary transition-colors">
									{formatNumber(userData.followers)}
								</span>
								<span className="text-[10px] text-text-secondary font-medium uppercase tracking-wider">
									Followers
								</span>
							</a>
							<a
								href={`${userData.html_url}?tab=following`}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center p-2 rounded-xl bg-surface hover:bg-surface-hover transition-colors border border-gray-800 group"
							>
								<span className="text-lg font-bold text-white group-hover:text-primary transition-colors">
									{formatNumber(userData.following)}
								</span>
								<span className="text-[10px] text-text-secondary font-medium uppercase tracking-wider">
									Following
								</span>
							</a>
						</div>

						<a
							href={userData.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="w-full flex items-center justify-center gap-2 rounded-xl h-11 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 mb-8"
						>
							<span>View on GitHub</span>
							<MoveUpRight className="w-4 h-4" />
						</a>

						<div className="space-y-4">
							{userData.company && (
								<div className="flex items-center gap-4 text-sm group">
									<div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
										<Landmark className="w-4 h-4" />
									</div>
									<div className="flex flex-col">
										<span className="text-xs text-text-secondary">Company</span>
										<span className="font-medium text-gray-300">
											{userData.company}
										</span>
									</div>
								</div>
							)}

							{userData.location && (
								<div className="flex items-center gap-4 text-sm group">
									<div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
										<MapPin className="w-4 h-4" />
									</div>
									<div className="flex flex-col">
										<span className="text-xs text-text-secondary">
											Location
										</span>
										<span className="font-medium text-gray-300">
											{userData.location}
										</span>
									</div>
								</div>
							)}

							{userData.email && (
								<div className="flex items-center gap-4 text-sm group">
									<div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
										<AtSign className="w-4 h-4" />
									</div>
									<div className="flex flex-col min-w-0">
										<span className="text-xs text-text-secondary">Email</span>
										<a
											href={`mailto:${userData.email}`}
											className="font-medium text-gray-300 hover:text-primary truncate"
										>
											{userData.email}
										</a>
									</div>
								</div>
							)}

							{userData.blog && (
								<div className="flex items-center gap-4 text-sm group">
									<div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
										<Languages className="w-4 h-4" />
									</div>
									<div className="flex flex-col min-w-0">
										<span className="text-xs text-text-secondary">Website</span>
										<a
											href={
												userData.blog.startsWith("http")
													? userData.blog
													: `https://${userData.blog}`
											}
											target="_blank"
											rel="noopener noreferrer"
											className="font-medium text-gray-300 hover:text-primary truncate"
										>
											{userData.blog}
										</a>
									</div>
								</div>
							)}

							<div className="flex items-center gap-4 text-sm group">
								<div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
									<Calendar className="w-4 h-4" />
								</div>
								<div className="flex flex-col">
									<span className="text-xs text-text-secondary">Joined</span>
									<span className="font-medium text-gray-300">
										{joinedDate}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default BasicInformation;
