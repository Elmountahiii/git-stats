"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Search, Github, Loader2 } from "lucide-react";
import Link from "next/link";

export default function Header() {
	const [username, setUsername] = useState("");
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (username.trim() && !isPending) {
			startTransition(() => {
				router.push(`/info?username=${encodeURIComponent(username.trim())}`);
			});
			setUsername("");
		}
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border-dark  bg-surface/90 backdrop-blur-md px-4 lg:px-10 py-2.5">
			<div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
				<div className="flex items-center gap-8 flex-1">
					<Link href="/" className="flex items-center gap-3 text-primary">
						<h2 className="text-white text-2xl font-bold tracking-tight">
							GitStats
						</h2>
					</Link>
				</div>

				<div className="flex-1 max-w-md hidden md:block">
					<form onSubmit={handleSearch} className="relative group">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							{isPending ? (
								<Loader2 className="h-4 w-4 text-primary animate-spin" />
							) : (
								<Search className="h-4 w-4 text-text-secondary group-focus-within:text-primary transition-colors" />
							)}
						</div>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							disabled={isPending}
							className="block w-full pl-10 pr-3 py-1.5 bg-surface border border-gray-800 rounded-lg text-sm text-white placeholder-text-secondary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
							placeholder={
								isPending ? "Searching..." : "Search another user..."
							}
						/>
					</form>
				</div>

				<div className="flex-1 flex justify-end items-center gap-3">
					<a
						href="https://github.com/elmountahiiii/git-stats"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-gray-800 text-sm font-medium text-white hover:bg-surface-hover hover:border-gray-700 transition-all"
					>
						<Github className="w-4 h-4" />
						<span className="hidden sm:inline">Source Code</span>
					</a>
				</div>
			</div>
		</header>
	);
}
