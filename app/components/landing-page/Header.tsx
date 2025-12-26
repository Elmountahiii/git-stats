import Link from "next/link";
import { Code2 } from "lucide-react";

export default function Header() {
	return (
		<div className="w-full flex justify-center sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b  border-gray-800 transition-colors duration-300">
			<div className="layout-content-container flex flex-col w-full max-w-7xl flex-1 mx-auto">
				<header className="flex items-center justify-between whitespace-nowrap px-4 py-3 md:px-8">
					<div className="flex items-center gap-3">
						<Link href="/" className="flex items-center gap-3 group">
							<h2 className="font-display text-3xl font-bold leading-tight tracking-tight  text-white group-hover:opacity-80 transition-opacity">
								GitStats
							</h2>
						</Link>
					</div>

					<div className="flex flex-1 justify-end gap-4 md:gap-8">
						<nav className="hidden md:flex items-center gap-8">
							<a
								className="font-body text-base font-medium  text-gray-300  hover:text-primary transition-colors"
								href="#tech-stack"
							>
								Tech Stack
							</a>
							<a
								className="font-body text-base font-medium  text-gray-300  hover:text-primary transition-colors"
								href="#about"
							>
								About Project
							</a>
						</nav>

						<Link
							href="https://github.com/Elmountahiii/git-stats"
							target="_blank"
							rel="noopener noreferrer"
							className="gap-1 flex items-center justify-center h-10 px-5 rounded-lg  bg-white  text-gray-900 font-body text-sm font-bold shadow-sm hover:opacity-90 transition-all active:scale-95"
						>
							<Code2 className="w-5 h-5" />
							<span className="hidden sm:inline">View Source Code</span>
						</Link>
					</div>
				</header>
			</div>
		</div>
	);
}
