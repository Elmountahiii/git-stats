"use client";

import { Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
	Bar,
	BarChart,
	Cell,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts";

interface CustomTooltipProps {
	active?: boolean;
	payload?: { value: number }[];
	label?: string;
}

// Mock Data for the last 30 days
const mockData = [
	{ date: "Aug 1", commits: 5 },
	{ date: "Aug 2", commits: 8 },
	{ date: "Aug 3", commits: 3 },
	{ date: "Aug 4", commits: 12 },
	{ date: "Aug 5", commits: 7 },
	{ date: "Aug 6", commits: 4 },
	{ date: "Aug 7", commits: 10 },
	{ date: "Aug 8", commits: 15 },
	{ date: "Aug 9", commits: 20 },
	{ date: "Aug 10", commits: 18 },
	{ date: "Aug 11", commits: 6 },
	{ date: "Aug 12", commits: 9 },
	{ date: "Aug 13", commits: 4 },
	{ date: "Aug 14", commits: 11 },
	{ date: "Aug 15", commits: 16 },
	{ date: "Aug 16", commits: 22 },
	{ date: "Aug 17", commits: 19 },
	{ date: "Aug 18", commits: 25 },
	{ date: "Aug 19", commits: 14 },
	{ date: "Aug 20", commits: 8 },
	{ date: "Aug 21", commits: 12 },
	{ date: "Aug 22", commits: 5 },
	{ date: "Aug 23", commits: 9 },
	{ date: "Aug 24", commits: 17 },
	{ date: "Aug 25", commits: 28 },
	{ date: "Aug 26", commits: 32 },
	{ date: "Aug 27", commits: 24 },
	{ date: "Aug 28", commits: 15 },
	{ date: "Aug 29", commits: 10 },
	{ date: "Aug 30", commits: 4 },
];

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

const CommitActivity = () => {
	const [timeRange, setTimeRange] = useState("30days");

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
						onChange={(e) => setTimeRange(e.target.value)}
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
					<BarChart data={mockData} style={{ outline: 'none' }}>
						<XAxis
							dataKey="date"
							axisLine={false}
							tickLine={false}
							tick={{ fill: "#92adc9", fontSize: 12 }}
							dy={10}
							interval={14} // Show roughly 3 labels (start, middle, end)
						/>
						<Tooltip
							content={<CustomTooltip />}
							cursor={{ fill: "transparent" }}
						/>
						<Bar dataKey="commits" radius={[4, 4, 4, 4]} barSize={16}>
							{mockData.map((entry) => (
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

export default CommitActivity;
