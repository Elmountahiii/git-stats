export interface Repository {
	name: string;
	description: string;
	language: string;
	languageColor: string;
	stars: number;
	forks: number;
	updatedAt: string;
	isTrending?: boolean;
}

export interface StatItem {
	label: string;
	value: string;
	subValue?: string;
	subValueColor?: string;
	subValueIcon?: string;
	footer: string;
	icon: string;
	iconColorClass: string;
	iconBgClass: string;
	isElite?: boolean;
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
