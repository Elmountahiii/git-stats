"use client";

import { Bookmark, GitFork, Star, TrendingUp } from "lucide-react";

import { Repository } from "@/app/types/types";

const mockRepos: Repository[] = [
	{
		name: "dotfiles",
		description: "My configuration files for MacOS, Zsh, Neovim, and Tmux.",
		language: "Shell",
		languageColor: "#64748b",
		stars: 1500,
		forks: 156,
		updatedAt: "2h ago",
		isTrending: true,
	},
	{
		name: "react-dashboard-kit",
		description: "A comprehensive React dashboard starter kit featuring Redux.",
		language: "JavaScript",
		languageColor: "#f59e0b",
		stars: 1200,
		forks: 234,
		updatedAt: "yesterday",
	},
	{
		name: "node-api-boilerplate",
		description: "Production-ready Node.js REST API boilerplate.",
		language: "TypeScript",
		languageColor: "#3b82f6",
		stars: 890,
		forks: 120,
		updatedAt: "3d ago",
	},
];

const RepositoryCard = ({ repo }: { repo: Repository }) => {
	// Helper to format large numbers (e.g. 1500 -> 1.5k)
	const formatCount = (num: number) => {
		return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
	};

	return (
		<div className="bg-card border border-border-dark rounded-xl p-6 hover:border-border-highlight transition-all duration-200 group">
			<div className="flex items-start justify-between mb-3">
				<div className="flex items-center gap-3">
					<div className="p-2 rounded-lg bg-surface border border-border-dark group-hover:border-primary/30 transition-colors">
						<Bookmark className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors" />
					</div>
					<h4 className="text-lg font-bold text-white hover:text-primary transition-colors cursor-pointer">
						{repo.name}
					</h4>
				</div>
				{repo.isTrending && (
					<div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
						<TrendingUp className="w-3 h-3 text-emerald-500" />
						<span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">
							Trending
						</span>
					</div>
				)}
			</div>

			<p className="text-text-secondary text-sm leading-relaxed mb-6 max-w-2xl">
				{repo.description}
			</p>

			<div className="flex items-center justify-between">
				<div className="flex items-center gap-6">
					{/* Language */}
					<div className="flex items-center gap-2">
						<div
							className="w-3 h-3 rounded-full"
							style={{ backgroundColor: repo.languageColor }}
						/>
						<span className="text-xs font-medium text-gray-300">
							{repo.language}
						</span>
					</div>

					{/* Stars */}
					<div className="flex items-center gap-1.5 text-text-secondary hover:text-yellow-400 transition-colors cursor-pointer">
						<Star className="w-4 h-4" />
						<span className="text-xs font-medium">
							{formatCount(repo.stars)}
						</span>
					</div>

					{/* Forks */}
					<div className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors cursor-pointer">
						<GitFork className="w-4 h-4" />
						<span className="text-xs font-medium">
							{formatCount(repo.forks)}
						</span>
					</div>
				</div>

				<div className="text-xs text-text-secondary">
					Updated {repo.updatedAt}
				</div>
			</div>
		</div>
	);
};

const TopRepositories = () => {
	return (
		<div className="flex flex-col gap-6 w-full">
			<div className="flex items-center justify-between">
				<h3 className="text-xl font-bold text-white tracking-tight">
					Top Repositories
				</h3>
			</div>

			<div className="grid grid-cols-1 gap-4">
				{mockRepos.map((repo) => (
					<RepositoryCard key={repo.name} repo={repo} />
				))}
			</div>
		</div>
	);
};

export default TopRepositories;
