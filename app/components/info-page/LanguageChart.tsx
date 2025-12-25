"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

interface ChartDataItem {
	name: string;
	value: number;
	color: string;
	[key: string]: string | number;
}

interface LanguageChartProps {
	data: ChartDataItem[];
}

const LanguageChart = ({ data }: LanguageChartProps) => {
	return (
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
	);
};

export default LanguageChart;
