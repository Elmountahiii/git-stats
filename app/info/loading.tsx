export default function Loading() {
	return (
		<div className="min-h-screen bg-background text-foreground font-space flex flex-col">
			<header className="sticky top-0 z-50 w-full border-b border-border-dark bg-surface/90 backdrop-blur-md px-4 lg:px-10 py-2.5">
				<div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
					<div className="flex items-center gap-8 flex-1">
						<div className="flex items-center gap-3">
							<div className="h-6 w-24 bg-surface-alt rounded animate-pulse" />
							<div className="hidden sm:block h-5 w-16 bg-surface-alt rounded-full animate-pulse" />
						</div>
					</div>
					<div className="flex-1 max-w-md hidden md:block">
						<div className="h-9 w-full bg-surface-alt rounded-lg animate-pulse" />
					</div>
					<div className="flex-1 flex justify-end">
						<div className="h-9 w-28 bg-surface-alt rounded-lg animate-pulse" />
					</div>
				</div>
			</header>

			<main className="flex-1 w-full max-w-400 mx-auto p-4 lg:p-8">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
						<div className="bg-card rounded-2xl border border-border-dark overflow-hidden">
							<div className="h-32 bg-surface-alt animate-pulse" />
							<div className="px-6 pb-6 -mt-16 relative">
								<div className="flex justify-center mb-4">
									<div className="w-32 h-32 bg-surface-alt rounded-full animate-pulse" />
								</div>
								<div className="text-center mb-6">
									<div className="h-8 w-40 bg-surface-alt rounded mx-auto mb-2 animate-pulse" />
									<div className="h-6 w-24 bg-surface-alt rounded-full mx-auto animate-pulse" />
								</div>
								<div className="h-12 w-full bg-surface-alt rounded mb-6 animate-pulse" />
								<div className="grid grid-cols-3 gap-2 mb-6">
									{[1, 2, 3].map((i) => (
										<div
											key={i}
											className="h-16 bg-surface-alt rounded-xl animate-pulse"
										/>
									))}
								</div>
								<div className="h-11 w-full bg-primary/20 rounded-xl mb-8 animate-pulse" />
								<div className="space-y-4">
									{[1, 2, 3, 4].map((i) => (
										<div key={i} className="flex items-center gap-4">
											<div className="w-9 h-9 bg-surface-alt rounded-lg animate-pulse" />
											<div className="flex-1">
												<div className="h-3 w-16 bg-surface-alt rounded mb-1 animate-pulse" />
												<div className="h-4 w-24 bg-surface-alt rounded animate-pulse" />
											</div>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="bg-card rounded-2xl border border-border-dark p-6">
							<div className="flex items-center justify-between mb-4">
								<div className="h-4 w-28 bg-surface-alt rounded animate-pulse" />
								<div className="h-5 w-8 bg-surface-alt rounded animate-pulse" />
							</div>
							<div className="flex gap-3">
								{[1, 2, 3].map((i) => (
									<div
										key={i}
										className="w-12 h-12 bg-surface-alt rounded-xl animate-pulse"
									/>
								))}
							</div>
						</div>
					</div>

					<div className="flex-1 flex flex-col gap-6 min-w-0">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
							{[1, 2, 3, 4].map((i) => (
								<div
									key={i}
									className="bg-card border border-border-dark rounded-xl p-4"
								>
									<div className="flex items-center gap-2.5 mb-3">
										<div className="w-8 h-8 bg-surface-alt rounded-lg animate-pulse" />
										<div className="h-4 w-20 bg-surface-alt rounded animate-pulse" />
									</div>
									<div className="h-8 w-24 bg-surface-alt rounded animate-pulse" />
								</div>
							))}
						</div>

						<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
							<div className="xl:col-span-2 bg-card border border-border-dark rounded-xl p-6 h-125">
								<div className="flex items-center justify-between mb-8">
									<div className="flex items-center gap-3">
										<div className="w-5 h-5 bg-surface-alt rounded animate-pulse" />
										<div className="h-6 w-32 bg-surface-alt rounded animate-pulse" />
									</div>
									<div className="h-8 w-28 bg-surface-alt rounded-lg animate-pulse" />
								</div>
								<div className="flex-1 h-64 bg-surface-alt rounded animate-pulse" />
							</div>

							<div className="xl:col-span-1 bg-card border border-border-dark rounded-xl p-6 h-125">
								<div className="flex items-center gap-3 mb-8">
									<div className="w-5 h-5 bg-surface-alt rounded animate-pulse" />
									<div className="h-6 w-40 bg-surface-alt rounded animate-pulse" />
								</div>
								<div className="flex justify-center mb-6">
									<div className="w-44 h-44 bg-surface-alt rounded-full animate-pulse" />
								</div>
								<div className="space-y-3">
									{[1, 2, 3, 4, 5].map((i) => (
										<div key={i} className="flex items-center justify-between">
											<div className="flex items-center gap-3">
												<div className="w-3 h-3 bg-surface-alt rounded-full animate-pulse" />
												<div className="h-4 w-20 bg-surface-alt rounded animate-pulse" />
											</div>
											<div className="h-4 w-10 bg-surface-alt rounded animate-pulse" />
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="flex flex-col gap-6">
							<div className="h-7 w-40 bg-surface-alt rounded animate-pulse" />
							<div className="grid grid-cols-1 gap-4">
								{[1, 2, 3].map((i) => (
									<div
										key={i}
										className="bg-card border border-border-dark rounded-xl p-4"
									>
										<div className="flex items-start justify-between mb-2">
											<div className="flex items-center gap-2.5">
												<div className="w-8 h-8 bg-surface-alt rounded-lg animate-pulse" />
												<div className="h-5 w-32 bg-surface-alt rounded animate-pulse" />
											</div>
										</div>
										<div className="h-4 w-3/4 bg-surface-alt rounded mb-4 animate-pulse" />
										<div className="flex items-center gap-4">
											<div className="h-4 w-16 bg-surface-alt rounded animate-pulse" />
											<div className="h-4 w-12 bg-surface-alt rounded animate-pulse" />
											<div className="h-4 w-12 bg-surface-alt rounded animate-pulse" />
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
