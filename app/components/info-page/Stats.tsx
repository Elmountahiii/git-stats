import {
	Trophy,
	Flame,
	GitCommitVertical,
	CalendarDays,
	TrendingUp,
} from "lucide-react";

import { StatCardProps } from "@/app/types/types";
import { UserStats } from "@/app/types/stats";
import { HttpResponse } from "@/app/types/http-response";

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
		<div className="bg-card border border-border-dark rounded-xl p-4 flex flex-col justify-between h-full hover:border-border-highlight transition-colors duration-200">
			{/* Header */}
			<div className="flex items-center gap-2.5 mb-3">
				<div
					className={`p-1.5 rounded-lg ${iconBgClass} flex items-center justify-center`}
				>
					<Icon className={`w-4 h-4 ${iconColorClass}`} />
				</div>
				<span className="text-text-secondary font-medium text-xs md:text-sm">
					{label}
				</span>
			</div>

			{/* Main Content */}
			<div className="mb-1.5">
				<div className="flex items-baseline gap-2 flex-wrap">
					<h3 className="text-2xl font-bold text-white font-space">{value}</h3>

					{/* Trend or Badge */}
					{trend && (
						<div className="flex items-center gap-1 text-[10px] font-medium text-emerald-400">
							{trendUp && <TrendingUp className="w-2.5 h-2.5" />}
							<span>{trend}</span>
						</div>
					)}

					{badge && (
						<span
							className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${badge.colorClass}`}
						>
							{badge.text}
						</span>
					)}

					{subValue && (
						<span className="text-xs text-text-secondary">{subValue}</span>
					)}
				</div>
			</div>
		</div>
	);
};

const getRankBadge = (rank: string): { text: string; colorClass: string } => {
	if (rank.includes("1%")) {
		return { text: "Elite", colorClass: "text-blue-400 bg-blue-400/10" };
	}
	if (rank.includes("5%")) {
		return { text: "Top Tier", colorClass: "text-purple-400 bg-purple-400/10" };
	}
	if (rank.includes("10%")) {
		return {
			text: "Excellent",
			colorClass: "text-emerald-400 bg-emerald-400/10",
		};
	}
	if (rank.includes("20%")) {
		return { text: "Great", colorClass: "text-green-400 bg-green-400/10" };
	}
	if (rank.includes("30%")) {
		return { text: "Good", colorClass: "text-yellow-400 bg-yellow-400/10" };
	}
	return { text: "Active", colorClass: "text-gray-400 bg-gray-400/10" };
};

const formatNumber = (num: number): string => {
	if (num >= 1000000) {
		return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
	}
	if (num >= 1000) {
		return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
	}
	return num.toLocaleString();
};

interface StatsProps {
	username: string;
}

const Stats = async ({ username }: StatsProps) => {
	const rawResponse = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/stats?username=${username}`,
	);

	if (!rawResponse.ok) {
		throw new Error("Failed to fetch stats data");
	}

	const response: HttpResponse<UserStats> = await rawResponse.json();
	const stats = response.data;

	const statsData: StatCardProps[] = [
		{
			label: "Universal Rank",
			value: stats.universalRank,
			badge: getRankBadge(stats.universalRank),

			icon: Trophy,
			iconColorClass: "text-blue-400",
			iconBgClass: "bg-blue-400/10",
		},
		{
			label: "Longest Streak",
			value: `${stats.longestStreak} Days`,

			icon: Flame,
			iconColorClass: "text-orange-500",
			iconBgClass: "bg-orange-500/10",
		},
		{
			label: "Total Commits",
			value: formatNumber(stats.totalCommits),
			subValue: "this year",

			icon: GitCommitVertical,
			iconColorClass: "text-emerald-400",
			iconBgClass: "bg-emerald-400/10",
		},
		{
			label: "Most Active",
			value: stats.mostActiveMonth,
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
