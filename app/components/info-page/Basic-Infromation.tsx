import React from "react";
import Image from "next/image";
import { ORGANIZATIONS, USER_PROFILE } from "@/app/utils/constants";
import {
	BadgeCheck,
	MoveUpRight,
	Landmark,
	MapPin,
	AtSign,
	Languages,
} from "lucide-react";

const BasicInformation: React.FC = () => {
	return (
		<aside className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
			<div className="lg:sticky lg:top-24 flex flex-col gap-6">
				{/* Profile Card */}
				<div className="bg-card-dark rounded-2xl border border-gray-800 overflow-hidden shadow-sm relative">
					{/* Cover Area */}
					<div className="h-32 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent relative">
						<div
							className="absolute inset-0 bg-opacity-10"
							style={{ backgroundImage: `url("${USER_PROFILE.coverPattern}")` }}
						></div>
					</div>

					<div className="px-6 pb-6 -mt-16 relative">
						<div className="flex justify-center mb-4">
							<div className="relative group">
								<div className="w-32 h-32 p-1.5 bg-card-dark rounded-full shadow-lg ring-1 ring-white/5">
									<Image
										src={USER_PROFILE.avatar}
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
								{USER_PROFILE.name}
							</h1>
							<div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
								<span>{USER_PROFILE.handle}</span>
								<BadgeCheck className="w-4 h-4" />
							</div>
						</div>

						<div className="text-text-secondary text-sm text-center leading-relaxed mb-6">
							{USER_PROFILE.bio}
						</div>

						<div className="grid grid-cols-2 gap-4 mb-6">
							<a
								href="#"
								className="flex flex-col items-center p-3 rounded-xl bg-surface hover:bg-surface-hover transition-colors border border-gray-800 group"
							>
								<span className="text-xl font-bold text-white group-hover:text-primary transition-colors">
									{USER_PROFILE.followers}
								</span>
								<span className="text-xs text-text-secondary font-medium">
									Followers
								</span>
							</a>
							<a
								href="#"
								className="flex flex-col items-center p-3 rounded-xl bg-surface hover:bg-surface-hover transition-colors border border-gray-800 group"
							>
								<span className="text-xl font-bold text-white group-hover:text-primary transition-colors">
									{USER_PROFILE.following}
								</span>
								<span className="text-xs text-text-secondary font-medium">
									Following
								</span>
							</a>
						</div>

						<button className="w-full flex items-center justify-center gap-2 rounded-xl h-11 bg-primary hover:bg-primary/90 text-white text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 mb-8">
							<span>View on GitHub</span>
							<MoveUpRight className="w-4 h-4" />
						</button>

						<div className="space-y-4">
							<div className="flex items-center gap-4 text-sm group">
								<div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
									<Landmark className="w-4 h-4" />
								</div>
								<div className="flex flex-col">
									<span className="text-xs text-text-secondary">Company</span>
									<span className="font-medium text-gray-300">
										{USER_PROFILE.company}
									</span>
								</div>
							</div>

							<div className="flex items-center gap-4 text-sm group">
								<div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
									<MapPin className="w-4 h-4" />
								</div>
								<div className="flex flex-col">
									<span className="text-xs text-text-secondary">Location</span>
									<span className="font-medium text-gray-300">
										{USER_PROFILE.location}
									</span>
								</div>
							</div>

							<div className="flex items-center gap-4 text-sm group">
								<div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
									<AtSign className="w-4 h-4" />
								</div>
								<div className="flex flex-col min-w-0">
									<span className="text-xs text-text-secondary">Email</span>
									<a
										href={`mailto:${USER_PROFILE.email}`}
										className="font-medium text-gray-300 hover:text-primary truncate"
									>
										{USER_PROFILE.email}
									</a>
								</div>
							</div>

							<div className="flex items-center gap-4 text-sm group">
								<div className="w-9 h-9 rounded-lg bg-surface flex items-center justify-center text-text-secondary group-hover:text-primary group-hover:bg-primary/10 transition-colors shrink-0">
									<Languages className="w-4 h-4" />
								</div>
								<div className="flex flex-col min-w-0">
									<span className="text-xs text-text-secondary">Website</span>
									<a
										href="#"
										className="font-medium text-gray-300 hover:text-primary truncate"
									>
										{USER_PROFILE.website}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Organizations Card */}
				<div className="bg-card-dark rounded-2xl border border-gray-800 p-6 shadow-sm">
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-sm font-bold text-white uppercase tracking-wide">
								Organizations
							</h3>
							<span className="text-xs bg-surface text-text-secondary px-2 py-1 rounded-md">
								3
							</span>
						</div>
						<div className="flex gap-3">
							{ORGANIZATIONS.map((org, index) => (
								<a
									key={index}
									href="#"
									title={org.name}
									className="w-12 h-12 rounded-xl bg-surface p-2 border border-gray-800 hover:border-primary/50 hover:shadow-md transition-all group"
								>

								<Image
									src={org.logo}
									alt={org.name}
									width={48}
									height={48}
									className="w-full h-full object-contain rounded opacity-80 group-hover:opacity-100 transition-opacity"
								/>
							</a>
						))}
					</div>
				</div>
			</div>
		</aside>
	);
};

export default BasicInformation;
