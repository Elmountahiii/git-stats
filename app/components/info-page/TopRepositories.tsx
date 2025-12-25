import { Bookmark, GitFork, Star, TrendingUp } from "lucide-react";
import { HttpResponse } from "@/app/types/http-response";
import { GitHubRepository } from "@/app/types/github-repository";

interface TopRepositoriesProps {
	username: string;
}

const getLanguageColor = (language: string | null): string => {
	if (!language) return "#64748b";

	const colors: { [key: string]: string } = {
		TypeScript: "#3178c6",
		JavaScript: "#f1e05a",
		Python: "#3572A5",
		Rust: "#dea584",
		Go: "#00ADD8",
		Java: "#b07219",
		HTML: "#e34c26",
		CSS: "#563d7c",
		Swift: "#F05138",
		PHP: "#4F5D95",
		Ruby: "#701516",
		"C++": "#f34b7d",
		"C#": "#178600",
		C: "#555555",
		Vue: "#41b883",
		Shell: "#89e051",
		React: "#61dafb",
		Dart: "#00B4AB",
		Kotlin: "#A97BFF",
	};

	return colors[language] || "#64748b";
};

const RepositoryCard = ({ repo }: { repo: GitHubRepository }) => {
	const formatCount = (num: number) => {
		return num >= 1000 ? `${(num / 1000).toFixed(1)}k` : num;
	};

	const formatUpdateDate = (dateString: string) => {
		const date = new Date(dateString);
		const now = new Date();
		const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

		if (diffInSeconds < 60) return "just now";
		if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
		if (diffInSeconds < 86400)
			return `${Math.floor(diffInSeconds / 3600)}h ago`;
		if (diffInSeconds < 2592000)
			return `${Math.floor(diffInSeconds / 86400)}d ago`;

		return date.toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
		});
	};

	return (
		<a
			href={repo.html_url}
			target="_blank"
			rel="noopener noreferrer"
			className="bg-card border border-border-dark rounded-xl p-4 hover:border-border-highlight transition-all duration-200 group block"
		>
			<div className="flex items-start justify-between mb-2">
				<div className="flex items-center gap-2.5">
					<div className="p-1.5 rounded-lg bg-surface border border-border-dark group-hover:border-primary/30 transition-colors">
						<Bookmark className="w-3.5 h-3.5 text-text-secondary group-hover:text-primary transition-colors" />
					</div>
					<h4 className="text-base font-bold text-white group-hover:text-primary transition-colors cursor-pointer">
						{repo.name}
					</h4>
				</div>
				{repo.stargazers_count > 5 && (
					<div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
						<TrendingUp className="w-2.5 h-2.5 text-emerald-500" />
						<span className="text-[9px] font-bold text-emerald-500 uppercase tracking-wider">
							Trending
						</span>
					</div>
				)}
			</div>

			<p className="text-text-secondary text-xs leading-relaxed mb-4 max-w-2xl line-clamp-2">
				{repo.description}
			</p>

			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					{repo.language && (
						<div className="flex items-center gap-1.5">
							<div
								className="w-2.5 h-2.5 rounded-full"
								style={{ backgroundColor: getLanguageColor(repo.language) }}
							/>
							<span className="text-[11px] font-medium text-gray-300">
								{repo.language}
							</span>
						</div>
					)}

					<div className="flex items-center gap-1 text-text-secondary group-hover:text-yellow-400 transition-colors">
						<Star className="w-3.5 h-3.5" />
						<span className="text-[11px] font-medium">
							{formatCount(repo.stargazers_count)}
						</span>
					</div>

					<div className="flex items-center gap-1 text-text-secondary group-hover:text-primary transition-colors">
						<GitFork className="w-3.5 h-3.5" />
						<span className="text-[11px] font-medium">
							{formatCount(repo.forks)}
						</span>
					</div>
				</div>

				<div className="text-[11px] text-text-secondary">
					Updated {formatUpdateDate(repo.updated_at)}
				</div>
			</div>
		</a>
	);
};

const TopRepositories = async ({ username }: TopRepositoriesProps) => {
	const rawResponse = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/repositories?username=${username}`,
	);
	if (!rawResponse.ok) {
		throw new Error("Failed to fetch user oraganizations");
	}
	const response: HttpResponse<GitHubRepository[]> =
		await rawResponse.json();
	const repositories = response.data;
	return (
		<div className="flex flex-col gap-6 w-full">
			<div className="flex items-center justify-between">
				<h3 className="text-xl font-bold text-white tracking-tight">
					Top Repositories
				</h3>
			</div>

			<div className="grid grid-cols-1 gap-4">
				{repositories.length > 0 ? (
					repositories.map((repo) => (
						<RepositoryCard key={repo.name} repo={repo} />
					))
				) : (
					<div className="flex flex-col items-center justify-center p-12 bg-card border border-border-dark rounded-2xl text-center">
						<div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mb-4 border border-border-dark">
							<Bookmark className="w-8 h-8 text-text-secondary opacity-50" />
						</div>
						<h4 className="text-lg font-bold text-white mb-2">
							No Repositories Found
						</h4>
						<p className="text-text-secondary text-sm max-w-xs">
							This user doesn&apos;t have any public repositories to display
							yet.
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default TopRepositories;
