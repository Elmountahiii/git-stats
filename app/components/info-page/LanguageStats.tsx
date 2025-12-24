"use client";

import { Code2 } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
	{ name: "TypeScript", value: 35, color: "#3b82f6" },
	{ name: "JavaScript", value: 25, color: "#f59e0b" },
	{ name: "Python", value: 20, color: "#10b981" },
	{ name: "CSS", value: 12, color: "#8b5cf6" },
	{ name: "Others", value: 8, color: "#64748b" },
];

const LanguageStats = () => {
	return (
		<div className="bg-card border border-border-dark rounded-xl p-6 h-[500px] flex flex-col w-full">
			{/* Header */}
			<div className="flex items-center gap-3 mb-8">
				<Code2 className="w-5 h-5 text-text-secondary" />
				<h3 className="text-white font-bold text-lg">Most Used Languages</h3>
			</div>

			{/* Chart Area */}
			<div className="relative flex-1 w-full min-h-0">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<Pie
							data={data}
							cx="50%"
							cy="50%"
							innerRadius={60}
							outerRadius={90}
							paddingAngle={0}
							dataKey="value"
							stroke="none"
						>
							{data.map((entry) => (
								<Cell key={entry.name} fill={entry.color} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
				{/* Center Label */}
				<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
					<span className="text-3xl font-bold text-white font-space">5</span>
					<span className="text-xs text-text-secondary">Languages</span>
				</div>
			</div>

			{/* Custom Legend */}
			<div className="mt-6 space-y-3">
				{data.map((item) => (
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
