import Link from "next/link";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border-dark  bg-surface/90 backdrop-blur-md px-4 lg:px-10 py-3">
			<div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
				<div className="flex items-center gap-8 flex-1">
					<div className="flex items-center gap-3 text-primary">
						<h2 className="text-white text-xl font-bold tracking-tight">
							GitStats
						</h2>
						<span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 font-body">
							Portfolio
						</span>
					</div>
				</div>
			</div>
		</header>
	);
}
