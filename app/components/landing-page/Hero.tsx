"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Terminal } from "lucide-react";

export default function Hero() {
	const [username, setUsername] = useState("");
	const router = useRouter();

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (username.trim()) {
			router.push(`/info?username=${encodeURIComponent(username.trim())}`);
		}
	};

	return (
		<div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
			<div className="layout-content-container flex flex-col max-w-5xl flex-1">
				<div className="@container">
					<div className="flex flex-col gap-6 py-16 @[480px]:gap-8 items-center text-center relative overflow-hidden rounded-3xl bg-linear-to-br from-surface-alt via-transparent to-primary/10 border border-border-dark px-6 md:px-12 shadow-sm">
						<div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
						<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
						<div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 justify-center items-center w-full z-10 max-w-200">
							<div className="flex flex-col gap-5 items-center">
								<div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-bold text-primary shadow-sm hover:bg-primary/15 transition-colors cursor-default">
									<span className="relative flex h-2.5 w-2.5">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
										<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
									</span>
									Live Interactive Demo
								</div>
								<h1 className="text-white text-5xl font-black leading-[1.1] tracking-[-0.033em] @[480px]:text-6xl md:text-7xl bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400 pb-2">
									Explore GitHub
									<br className="hidden sm:block" />
									User Statistics
								</h1>
								<h2 className="text-text-secondary text-lg font-normal leading-relaxed max-w-160">
									Search for any GitHub user and instantly visualize their
									coding activity, repository insights, and contribution
									patterns with an interactive, real-time dashboard.
								</h2>
							</div>
							<form
								onSubmit={handleSearch}
								className="flex flex-col w-full max-w-140 h-14 md:h-16 shadow-xl shadow-black/20 transform transition-transform hover:scale-[1.01]"
							>
								<div className="flex w-full flex-1 items-stretch rounded-xl h-full overflow-hidden ring-1 ring-border-highlight focus-within:ring-2 focus-within:ring-primary bg-surface-alt transition-all">
									<div className="text-text-secondary flex border-none items-center justify-center pl-5 border-r-0">
										<Search className="w-5.5 h-5.5" />
									</div>
									<input
										type="text"
										value={username}
										onChange={(e) => setUsername(e.target.value)}
										className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden text-white focus:outline-0 border-none bg-transparent h-full placeholder:text-text-secondary/60 px-4 text-base font-normal leading-normal"
										placeholder="Try searching 'torvalds' or 'gaearon'..."
										aria-label="GitHub username"
									/>
									<div className="flex items-center justify-center border-l-0 border-none pr-2 py-2">
										<button
											type="submit"
											disabled={!username.trim()}
											className="flex min-w-25 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-full px-6 bg-primary hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm"
										>
											<span className="truncate">Search</span>
										</button>
									</div>
								</div>
							</form>
							<div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-text-secondary">
								<div className="flex items-center gap-2">
									<Terminal className="w-4 h-4" />
									<span className="font-medium">Built with:</span>
								</div>
								<div className="flex items-center gap-3">
									<span className="flex items-center gap-1.5 px-2 py-1 rounded bg-gray-800 text-xs font-semibold uppercase tracking-wider text-gray-400">
										<span className="w-1.5 h-1.5 rounded-full bg-[#61DAFB]" />
										React
									</span>
									<span className="flex items-center gap-1.5 px-2 py-1 rounded bg-gray-800 text-xs font-semibold uppercase tracking-wider text-gray-400">
										<span className="w-1.5 h-1.5 rounded-full bg-[#38B2AC]" />
										Tailwind
									</span>
									<span className="flex items-center gap-1.5 px-2 py-1 rounded bg-gray-800 text-xs font-semibold uppercase tracking-wider text-gray-400">
										<span className="w-1.5 h-1.5 rounded-full bg-white" />
										GitHub API
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
