"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Github } from "lucide-react";
import Link from "next/link";

export default function Header() {
	const [username, setUsername] = useState("");
	const router = useRouter();

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
		if (username.trim()) {
			router.push(`/info?username=${encodeURIComponent(username.trim())}`);
			setUsername("");
		}
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border-dark  bg-surface/90 backdrop-blur-md px-4 lg:px-10 py-2.5">
			<div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
				<div className="flex items-center gap-8 flex-1">
					<Link href="/" className="flex items-center gap-3 text-primary">
						<h2 className="text-white text-lg font-bold tracking-tight">
							GitStats
						</h2>
						<span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-primary/10 text-primary border border-primary/20 font-body">
							Portfolio
						</span>
					</Link>
				</div>

				<div className="flex-1 max-w-md hidden md:block">
					<form onSubmit={handleSearch} className="relative group">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<Search className="h-4 w-4 text-text-secondary group-focus-within:text-primary transition-colors" />
						</div>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="block w-full pl-10 pr-3 py-1.5 bg-surface border border-gray-800 rounded-lg text-sm text-white placeholder-text-secondary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
							placeholder="Search another user..."
						/>
					</form>
				</div>

				<div className="flex-1 flex justify-end items-center gap-3">
					<a
						href="https://github.com/elmountahi/git-stats"
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
