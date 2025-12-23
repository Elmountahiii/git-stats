import BasicInformation from "../components/info-page/Basic-Infromation";
import Header from "../components/info-page/Header";

interface PageProps {
	searchParams: Promise<{
		username: string;
	}>;
}

export default async function Info({ searchParams }: PageProps) {
	const { username } = await searchParams;
	return (
		<div className="flex min-h-screen flex-col items-center justify-center p-4 font-space bg-background-dark">
			<main className="grow container mx-auto ">
				<div className="flex flex-col gap-8">
					<Header />
					<BasicInformation />
				</div>
			</main>
		</div>
	);
}
