import { Code, FileCode, Palette } from "lucide-react";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5 border-t border-[#233648]">
			<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
				<footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
					<div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-center">
						<Link
							className="text-[#92adc9] text-base font-normal leading-normal hover:text-primary transition-colors"
							href="https://elmountahiii.dev"
							target="_blank"
							rel="noopener noreferrer"
						>
							My Portfolio
						</Link>
						<Link
							className="text-[#92adc9] text-base font-normal leading-normal hover:text-primary transition-colors"
							href="https://www.linkedin.com/in/elmountahiii/"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</Link>
						<Link
							className="text-[#92adc9] text-base font-normal leading-normal hover:text-primary transition-colors"
							href="https://github.com/elmountahiii"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub Profile
						</Link>
					</div>
					<div className="flex flex-col items-center gap-2">
						<p className="text-[#92adc9] text-base font-normal leading-normal">
							© {new Date().getFullYear()} Portfolio Project. Not affiliated
							with GitHub.
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
}
