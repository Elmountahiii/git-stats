import Footer from "./components/landing-page/Footer";
import Header from "./components/landing-page/Header";
import Hero from "./components/landing-page/Hero";
import OpenSource from "./components/landing-page/OpenSource";
import TechnicalImplementation from "./components/landing-page/TechnicalImplementation";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center p-4 font-space bg-background-dark">
			<main className="grow container mx-auto">
				<Header />
				<Hero />
				<TechnicalImplementation />
				<OpenSource />
				<Footer />
			</main>
		</div>
	);
}
