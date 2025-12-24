import BasicInformation from "../components/info-page/Basic-Infromation";
import CommitActivity from "../components/info-page/CommitActivity";
import Header from "../components/info-page/Header";
import LanguageStats from "../components/info-page/LanguageStats";
import Organizations from "../components/info-page/Organizations";
import Stats from "../components/info-page/Stats";
import TopRepositories from "../components/info-page/TopRepositories";

export default async function Info() {
	return (
		<div className="min-h-screen bg-background text-foreground font-space flex flex-col">
			<Header />

			<main className="flex-1 w-full max-w-[1600px] mx-auto p-4 lg:p-8">
				<div className="flex flex-col lg:flex-row gap-8">
					{/* Left Sidebar - Profile Info */}
					<div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
						<BasicInformation />
						<Organizations />
					</div>

					{/* Main Content Area */}
					<div className="flex-1 flex flex-col gap-6 min-w-0">
						{/* Top Stats Cards */}
						<Stats />

						{/* Middle Section - Charts */}
						<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
							<div className="xl:col-span-2">
								<CommitActivity />
							</div>
							<div className="xl:col-span-1">
								<LanguageStats />
							</div>
						</div>

						{/* Bottom Section - Repositories */}
						<div className="flex flex-col gap-6">
							<TopRepositories />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
