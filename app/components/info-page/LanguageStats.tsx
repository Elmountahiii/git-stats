import { Code } from "lucide-react";
import { LanguageStats as LanguageStatsType } from "@/app/api/languages/route";
import { HttpResponse } from "@/app/types/http-response";
import LanguageChart from "./LanguageChart";

interface LanguageStatsProps {
	username: string;
}

const LanguageStats = async ({ username }: LanguageStatsProps) => {
	const rawResponse = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/languages?username=${username}`,
	);

	if (!rawResponse.ok) {
		throw new Error("Failed to fetch language data");
	}

	const response: HttpResponse<LanguageStatsType[]> = await rawResponse.json();
	const languages = response.data;

	// Take top 5 languages and group the rest as "Others"
	const topLanguages = languages.slice(0, 5);
	const otherLanguages = languages.slice(5);

	const othersPercentage = otherLanguages.reduce(
		(sum, lang) => sum + lang.percentage,
		0,
	);

	const chartData = topLanguages.map((lang) => ({
		name: lang.name,
		value: Math.round(lang.percentage * 10) / 10,
		color: lang.color,
	}));

	if (othersPercentage > 0) {
		chartData.push({
			name: "Others",
			value: Math.round(othersPercentage * 10) / 10,
			color: "#64748b",
		});
	}

	const totalLanguages = languages.length;

	return (
		<div className="bg-card border border-border-dark rounded-xl p-6 h-[500px] flex flex-col w-full">
			{/* Header */}
			<div className="flex items-center gap-3 mb-8">
				<Code className="w-5 h-5 text-text-secondary" />
				<h3 className="text-white font-bold text-lg">Most Used Languages</h3>
			</div>

			{/* Chart Area */}
			<div className="relative flex-1 w-full min-h-0">
				<LanguageChart data={chartData} />
				{/* Center Label */}
				<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
					<span className="text-3xl font-bold text-white font-space">
						{totalLanguages}
					</span>
					<span className="text-xs text-text-secondary">Languages</span>
				</div>
			</div>

			{/* Custom Legend */}
			<div className="mt-6 space-y-3">
				{chartData.map((item) => (
					<div key={item.name} className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<div
								className="w-3 h-3 rounded-full"
								style={{ backgroundColor: item.color }}
							/>
							<span className="text-sm font-medium text-gray-300">
								{item.name}
							</span>
						</div>
						<span className="text-sm font-bold text-white">{item.value}%</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default LanguageStats;
