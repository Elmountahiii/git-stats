import { Code2 } from "lucide-react";
import Link from "next/link";

export default function OpenSource() {
	return (
		<div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10">
			<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
				<div className="flex flex-col items-center gap-8 rounded-2xl bg-gradient-to-b from-surface-hover to-transparent p-8 md:p-12 border border-border-highlight">
					<div className="text-center max-w-2xl">
						<h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
							Open Source & Transparent
						</h2>
						<p className="text-text-secondary mb-6">
							This project is open for review. Explore the codebase to evaluate
							code quality, component structure, and project organization.
						</p>
						<div className="flex gap-4 justify-center">
							<Link
								href="https://github.com"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-white text-[#111418] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-1"
							>
								<Code2 className="w-5 h-5" />
								View Source on GitHub
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
