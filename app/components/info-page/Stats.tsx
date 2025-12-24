import {
	ChartNoAxesColumn,
	GitCommitHorizontal,
	GitPullRequest,
	Star,
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
					className={`p-2 rounded-full ${iconBgClass} flex items-center justify-center`}
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
					<h3 className="text-3xl font-bold text-foreground font-space">
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
							className={`text-xs font-medium px-2 py-0.5 rounded-full bg-opacity-20 ${badge.colorClass}`}
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
			<div className="mt-auto pt-2">
				<p className="text-sm text-text-secondary">{footer}</p>
			</div>
		</div>
	);
};

const Stats = () => {
	// Mock Data matching the design
	const statsData: StatCardProps[] = [
		{
			label: "Contributionssss",
			value: "2,847",
			trend: "+12%",
			trendUp: true,
			footer: "Last 12 months",
			icon: GitCommitHorizontal,
			iconColorClass: "text-emerald-400",
			iconBgClass: "bg-emerald-400/10",
		},
		{
			label: "Stars Earned",
			value: "3.4k",
			subValue: "Across all repos",
			footer: "Top 5% of users",
			icon: Star,
			iconColorClass: "text-yellow-400",
			iconBgClass: "bg-yellow-400/10",
		},
		{
			label: "Pull Requests",
			value: "432",
			badge: {
				text: "402 merged",
				colorClass: "text-purple-400 bg-purple-400/10",
			},
			footer: "93% acceptance rate",
			icon: GitPullRequest,
			iconColorClass: "text-purple-400",
			iconBgClass: "bg-purple-400/10",
		},
		{
			label: "Impact Score",
			value: "A+",
			badge: {
				text: "Elite",
				colorClass: "text-blue-400 bg-blue-400/10", // Using blue to match "Elite" text
			},
			footer: "Based on global activity",
			icon: ChartNoAxesColumn,
			iconColorClass: "text-blue-500",
			iconBgClass: "bg-blue-500/10",
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
