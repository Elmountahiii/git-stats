import Image from "next/image";

interface TechnicalImplementationProps {
	id?: string;
}

export default function TechnicalImplementation({
	id = "tech-stack",
}: TechnicalImplementationProps) {
	return (
		<div
			className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-10 bg-transparent"
			id={id}
		>
			<div className="layout-content-container flex flex-col max-w-[960px] flex-1">
				<div className="flex flex-col gap-10 py-10 @container">
					<div className="flex flex-col gap-4 text-center items-center">
						<h1 className="text-white tracking-tight text-[32px] font-bold leading-tight md:text-4xl max-w-[720px]">
							Technical Implementation
						</h1>
						<p className="text-text-secondary text-base font-normal leading-normal max-w-[720px]">
							This application was built to showcase clean code practices and
							modern frontend tooling. Here is a breakdown of the core
							technologies used.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="flex flex-1 gap-4 rounded-xl border border-border-highlight bg-card-alt p-6 flex-col shadow-sm hover:shadow-md transition-shadow group">
							<div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
								<Image
									src="/react_light.svg"
									alt="React"
									width={24}
									height={24}
									className="w-6 h-6"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<h2 className="text-white text-lg font-bold leading-tight">
									React Architecture
								</h2>
								<p className="text-text-secondary text-sm font-normal leading-relaxed">
									Built with functional components and Hooks. Implements context
									for global state management and custom hooks for data fetching
									logic.
								</p>
							</div>
						</div>
						<div className="flex flex-1 gap-4 rounded-xl border border-border-highlight bg-card-alt p-6 flex-col shadow-sm hover:shadow-md transition-shadow group">
							<div className="w-12 h-12 rounded-lg bg-teal-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
								<Image
									src="/tailwindcss.svg"
									alt="Tailwind CSS"
									width={24}
									height={24}
									className="w-6 h-6"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<h2 className="text-white text-lg font-bold leading-tight">
									Tailwind CSS
								</h2>
								<p className="text-text-secondary text-sm font-normal leading-relaxed">
									Fully responsive UI built with utility-first CSS. Features
									dark mode support and a custom configuration for consistent
									design tokens.
								</p>
							</div>
						</div>
						<div className="flex flex-1 gap-4 rounded-xl border border-border-highlight bg-card-alt p-6 flex-col shadow-sm hover:shadow-md transition-shadow group">
							<div className="w-12 h-12 rounded-lg bg-gray-700/30 flex items-center justify-center group-hover:scale-110 transition-transform">
								<Image
									src="/github_dark.svg"
									alt="GitHub"
									width={24}
									height={24}
									className="w-6 h-6"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<h2 className="text-white text-lg font-bold leading-tight">
									GitHub REST API
								</h2>
								<p className="text-text-secondary text-sm font-normal leading-relaxed">
									Direct integration with public endpoints to fetch real-time
									user data, handling asynchronous states, errors, and rate
									limits gracefully.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
