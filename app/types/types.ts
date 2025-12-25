export interface StatCardProps {
	label: string;
	value: string;
	subValue?: string;
	trend?: string;
	trendUp?: boolean;
	subValueColor?: string;
	footer?: string;
	icon: React.ElementType;
	iconColorClass: string;
	iconBgClass: string;
	badge?: {
		text: string;
		colorClass: string;
	};
}

export interface LanguageStat {
	name: string;
	percentage: number;
	color: string;
}

export interface CommitData {
	date: string;
	commits: number;
}
