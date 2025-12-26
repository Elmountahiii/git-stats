import BasicInformation from "../components/info-page/Basic-Infromation";
import CommitActivity from "../components/info-page/CommitActivity";
import Header from "../components/info-page/Header";
import LanguageStats from "../components/info-page/LanguageStats";
import Organizations from "../components/info-page/Organizations";
import Stats from "../components/info-page/Stats";
import { redirect } from "next/navigation";
import TopRepositories from "../components/info-page/TopRepositories";

interface infoPageProps {
	searchParams: Promise<{
		username?: string;
	}>;
}

export default async function Info({ searchParams }: infoPageProps) {
	const { username } = await searchParams;
	if (username === undefined || username.trim() === "") {
		redirect("/");
	}

	return (
		<div className="min-h-screen bg-background text-foreground font-space flex flex-col">
			<Header />

			<main className="flex-1 w-full max-w-400 mx-auto p-4 lg:p-8">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
						<BasicInformation username={username} />
						<Organizations username={username} />
					</div>

					<div className="flex-1 flex flex-col gap-6 min-w-0">
						<Stats username={username} />

						<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
							<div className="xl:col-span-2">
								<CommitActivity username={username} />
							</div>
							<div className="xl:col-span-1">
								<LanguageStats username={username} />
							</div>
						</div>

						<div className="flex flex-col gap-6">
							<TopRepositories username={username} />
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
