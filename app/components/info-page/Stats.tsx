import {
	Trophy,
	Flame,
	GitCommitVertical,
	CalendarDays,
	TrendingUp,
} from "lucide-react";

import { StatCardProps } from "@/app/types/types";

const StatCard = ({
	label,
	value,
	subValue,
	trend,
	trendUp,
	footer,
	icon: Icon,
	iconColorClass,
	iconBgClass,
	badge,
}: StatCardProps) => {
	return (
		<div className="bg-card border border-border-dark rounded-xl p-6 flex flex-col justify-between h-full hover:border-border-highlight transition-colors duration-200">
			{/* Header */}
			<div className="flex items-center gap-3 mb-4">
				<div
					className={`p-2 rounded-lg ${iconBgClass} flex items-center justify-center`}
				>
					<Icon className={`w-5 h-5 ${iconColorClass}`} />
				</div>
				<span className="text-text-secondary font-medium text-sm md:text-base">
					{label}
				</span>
			</div>

			{/* Main Content */}
			<div className="mb-2">
				<div className="flex items-baseline gap-3 flex-wrap">
					<h3 className="text-3xl font-bold text-white font-space">
						{value}
					</h3>

					{/* Trend or Badge */}
					{trend && (
						<div className="flex items-center gap-1 text-xs font-medium text-emerald-400">
							{trendUp && <TrendingUp className="w-3 h-3" />}
							<span>{trend}</span>
						</div>
					)}

					{badge && (
						<span
							className={`text-xs font-medium px-2 py-0.5 rounded-full ${badge.colorClass}`}
						>
							{badge.text}
						</span>
					)}

					{subValue && (
						<span className="text-sm text-text-secondary">{subValue}</span>
					)}
				</div>
			</div>

			{/* Footer */}
			<div className="mt-auto pt-2 border-t border-gray-800/50">
				<p className="text-xs text-text-secondary uppercase tracking-wider font-semibold">{footer}</p>
			</div>
		</div>
	);
};

const Stats = () => {
	// Mock Data for the new design
	const statsData: StatCardProps[] = [
		{
			label: "Global Rank",
			value: "Top 1%",
			badge: {
				text: "Elite",
				colorClass: "text-blue-400 bg-blue-400/10",
			},
			footer: "Based on commits",
			icon: Trophy,
			iconColorClass: "text-blue-400",
			iconBgClass: "bg-blue-400/10",
		},
		{
			label: "Longest Streak",
			value: "45 Days",
			trend: "+5",
			trendUp: true,
			footer: "Personal Best",
			icon: Flame,
			iconColorClass: "text-orange-500",
			iconBgClass: "bg-orange-500/10",
		},
		{
			label: "Total Commits",
			value: "1,284",
			subValue: "this year",
			footer: "Across all repos",
			icon: GitCommitVertical,
			iconColorClass: "text-emerald-400",
			iconBgClass: "bg-emerald-400/10",
		},
		{
			label: "Most Active",
			value: "October",
			subValue: "156 commits",
			footer: "Peak Productivity",
			icon: CalendarDays,
			iconColorClass: "text-purple-400",
			iconBgClass: "bg-purple-400/10",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
			{statsData.map((stat) => (
				<StatCard key={stat.label} {...stat} />
			))}
		</div>
	);
};

export default Stats;
