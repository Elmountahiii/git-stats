import { FileQuestion, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <FileQuestion className="w-10 h-10 text-primary" />
        </div>

        <h1 className="text-7xl font-bold text-white mb-4 font-space">404</h1>

        <h2 className="text-2xl font-bold text-white mb-3">Page Not Found</h2>

        <p className="text-text-secondary mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>

          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-surface hover:bg-surface-hover border border-border-dark text-white font-medium rounded-xl transition-colors"
          >
            <Search className="w-4 h-4" />
            Search Users
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-border-dark">
          <p className="text-text-secondary text-sm">
            Looking for a GitHub user? Try searching from the{" "}
            <Link href="/" className="text-primary hover:underline">
              homepage
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
