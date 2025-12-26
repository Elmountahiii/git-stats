"use client";

import { useState } from "react";
import { Calendar, ChevronDown } from "lucide-react";
import {
	Bar,
	BarChart,
	Cell,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts";

interface ChartDataItem {
	date: string;
	commits: number;
	[key: string]: string | number;
}

interface CustomTooltipProps {
	active?: boolean;
	payload?: { value: number }[];
	label?: string;
}

interface CommitActivityChartProps {
	dailyData: ChartDataItem[];
	weeklyData: ChartDataItem[];
	monthlyData: ChartDataItem[];
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
	if (active && payload && payload.length) {
		return (
			<div className="bg-surface border border-border-dark p-3 rounded-lg shadow-xl">
				<p className="text-text-secondary text-xs mb-1">{label}</p>
				<p className="text-white font-bold text-sm">
					{payload[0].value} Commits
				</p>
			</div>
		);
	}
	return null;
};

const CommitActivityChart = ({
	dailyData,
	weeklyData,
	monthlyData,
}: CommitActivityChartProps) => {
	const [timeRange, setTimeRange] = useState<"30days" | "3months" | "year">(
		"30days",
	);

	const getChartData = (): ChartDataItem[] => {
		switch (timeRange) {
			case "30days":
				return dailyData.slice(-30);
			case "3months":
				return weeklyData.slice(-12);
			case "year":
				return monthlyData;
			default:
				return dailyData.slice(-30);
		}
	};

	const getXAxisInterval = (): number => {
		switch (timeRange) {
			case "30days":
				return 6;
			case "3months":
				return 2;
			case "year":
				return 1;
			default:
				return 6;
		}
	};

	const chartData = getChartData();

	return (
		<div className="bg-card border border-border-dark rounded-xl p-6 h-[500px] flex flex-col w-full">
			{/* Header */}
			<div className="flex items-center justify-between mb-8">
				<div className="flex items-center gap-3">
					<Calendar className="w-5 h-5 text-text-secondary" />
					<h3 className="text-white font-bold text-lg">Commit Activity</h3>
				</div>
				<div className="relative">
					<select
						value={timeRange}
						onChange={(e) =>
							setTimeRange(e.target.value as "30days" | "3months" | "year")
						}
						className="appearance-none bg-surface border border-border-dark text-text-secondary text-xs rounded-lg pl-3 pr-8 py-1.5 focus:outline-none focus:border-primary/50 cursor-pointer hover:border-border-highlight transition-colors"
					>
						<option value="30days">Last 30 Days</option>
						<option value="3months">Last 3 Months</option>
						<option value="year">Last Year</option>
					</select>
					<ChevronDown className="w-3 h-3 text-text-secondary absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
				</div>
			</div>

			{/* Chart Area */}
			<div className="flex-1 w-full min-h-0">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={chartData} style={{ outline: "none" }}>
						<XAxis
							dataKey="date"
							axisLine={false}
							tickLine={false}
							tick={{ fill: "#92adc9", fontSize: 12 }}
							dy={10}
							interval={getXAxisInterval()}
						/>
						<Tooltip
							content={<CustomTooltip />}
							cursor={{ fill: "transparent" }}
						/>
						<Bar dataKey="commits" radius={[4, 4, 4, 4]} barSize={16}>
							{chartData.map((entry) => (
								<Cell
									key={entry.date}
									fill="#137fec"
									className="opacity-40 hover:opacity-100 transition-opacity duration-300 outline-none focus:outline-none"
								/>
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default CommitActivityChart;
