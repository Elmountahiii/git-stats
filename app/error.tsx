"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

interface ErrorProps {
	error: Error & { digest?: string };
	reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.error("Application error:", error);
	}, [error]);

	return (
		<div className="min-h-screen bg-background flex items-center justify-center p-4">
			<div className="max-w-md w-full bg-card border border-border-dark rounded-2xl p-8 text-center">
				<div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
					<AlertTriangle className="w-8 h-8 text-red-500" />
				</div>

				<h1 className="text-2xl font-bold text-white mb-2">
					Something went wrong
				</h1>

				<p className="text-text-secondary mb-6">
					An unexpected error occurred. Please try again or return to the home
					page.
				</p>

				<div className="flex flex-col sm:flex-row gap-3 justify-center">
					<button
						onClick={reset}
						className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors"
					>
						<RefreshCw className="w-4 h-4" />
						Try Again
					</button>

					<Link
						href="/"
						className="flex items-center justify-center gap-2 px-6 py-3 bg-surface hover:bg-surface-hover border border-border-dark text-white font-medium rounded-lg transition-colors"
					>
						<Home className="w-4 h-4" />
						Go Home
					</Link>
				</div>
			</div>
		</div>
	);
}
