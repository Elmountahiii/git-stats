import { CommitData, LanguageStat, Repository, StatItem } from "../types/types";

export const USER_PROFILE = {
	name: "Alex Devson",
	handle: "@alexcodez",
	avatar:
		"https://lh3.googleusercontent.com/aida-public/AB6AXuCEp87f5K4kowavHu5YYgMaO6l1D7IO_TOB6XkiyLOcyMMxgETLY0xw7oGgM3bLn9mN-ORAruo9Z1e3f3cKLuXEdso6rBnjsuG3s6b92EUOzV1L66oaPIc4FaKeD5BFV6Pat_TpWtKgWhD0Zx8e-cATnqmGpLSU4LPYOjwrnI0clZhHJUxl7C-BONywAs5V-7xA9w5GXK2SYf7nnb4HKIHnTfDDTglm7jzlmWfABctN2F0TSptjdzvSlgiq3dv0pwiKd1c_0H4fGXg",
	coverPattern:
		"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23137fec' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E",
	bio: "Full-stack wizard 🧙‍♂️ building accessible web experiences. Core contributor to React & Node.js ecosystems. Coffee enthusiast ☕.",
	followers: "1.2k",
	following: "450",
	company: "TechSolutions Inc.",
	location: "San Francisco, CA",
	email: "alex@example.com",
	website: "alexdevson.io",
};

export const ORGANIZATIONS = [
	{
		name: "Org 1",
		logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwSUz6XuBLdxGHhOiCxMJE29u-_NKrGiI8tnzCd9nChvQmO9bpXXZ9_mDiE_r-ChD97jCoUN9ZFs7a7Bta09rzF18vCWCj3euykYY1zMfgf0XpM-gPqtoJdfQ6WoUySWtDUlcgGgaUJNE3HmwZri3tOXJvgIqbijsdzjEKRLNWf2oM97C60lgxxxufnxgGVT1LIAZFu0pkCZxxvTC-XnyL8PpmHa1zdGdZ8chOfPOLZMS-YMtqCT0eeoVnwT0e0Pa2dgqmGg6ctww",
	},
	{
		name: "Org 2",
		logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdhaZs7k_g3Bwz6q_247R26Id8hz3KHOv-9KcFapSU4sO70E7wRKk_7KgThPov64B4LIl2IBtJkLkeozWORkSkkrE8CgU1eXRxtOB1Gm9L7waHpwsCMr-O-Tv97ZVkODQhKOOYd-Ikod5k7av3DgGluy6-r3rjfRtxXQsdLLf6UIGveHm2OHcwAdHJSH_oGefRn9br6o1q9TjOPlxmeYVfE3RL-3neU3RQ7EmrqGTkqEmjsQSmiX5kvwSo6BqY3wOrFm410xR6swY",
	},
	{
		name: "Org 3",
		logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuA18i3abtJ6QWgTCdG4AoqDPGYmcWlJmKS9HX--y5zxaXulNmilknj8T2f9RsNMJI9q-N1_ckny_n0F_2DKozB58hbhpV9C2f_Z9g9qRDAs_vkcSDqskktJjTiljsdQQYza36bSxoS7bToxqeRtg0eo257lovVSIbBXDFXAqgoiSL4l4yqula0qGA8iiujBBF1h4beSV_FH2OC69pW6tFqgiu_j2_CKvSHj9o4gbbj5XmN-6XuEl5FzP1C70ea3NRf2-PSM98-z9UE",
	},
];

export const STATS: StatItem[] = [
	{
		label: "Contributions",
		value: "2,847",
		subValue: "+12%",
		subValueColor: "text-green-500",
		subValueIcon: "trending_up",
		footer: "Last 12 months",
		icon: "commit",
		iconColorClass: "text-green-500",
		iconBgClass: "bg-green-500/10",
	},
	{
		label: "Stars Earned",
		value: "3.4k",
		footer: "Top 5% of users",
		icon: "star",
		iconColorClass: "text-yellow-500",
		iconBgClass: "bg-yellow-500/10",
	},
	{
		label: "Pull Requests",
		value: "432",
		subValue: "402 merged",
		subValueColor: "text-purple-500",
		footer: "93% acceptance rate",
		icon: "merge_type",
		iconColorClass: "text-purple-500",
		iconBgClass: "bg-purple-500/10",
	},
	{
		label: "Impact Score",
		value: "A+",
		subValue: "Elite",
		subValueColor: "text-primary",
		footer: "Based on global activity",
		icon: "equalizer",
		iconColorClass: "text-primary",
		iconBgClass: "bg-primary/10",
		isElite: true,
	},
];

export const REPOSITORIES: Repository[] = [
	{
		name: "dotfiles",
		description: "My configuration files for MacOS, Zsh, Neovim, and Tmux.",
		language: "Shell",
		languageColor: "bg-gray-400",
		stars: 1500,
		forks: 156,
		updatedAt: "Updated 2h ago",
		isTrending: true,
	},
	{
		name: "react-dashboard-kit",
		description: "A comprehensive React dashboard starter kit featuring Redux.",
		language: "JavaScript",
		languageColor: "bg-yellow-400",
		stars: 1200,
		forks: 234,
		updatedAt: "Updated yesterday",
	},
	{
		name: "node-api-boilerplate",
		description: "Production-ready Node.js REST API boilerplate.",
		language: "TypeScript",
		languageColor: "bg-blue-500",
		stars: 890,
		forks: 120,
		updatedAt: "Updated 3d ago",
	},
];

export const LANGUAGE_STATS: LanguageStat[] = [
	{ name: "TypeScript", percentage: 35, color: "#137fec" },
	{ name: "JavaScript", percentage: 25, color: "#f59e0b" },
	{ name: "Python", percentage: 20, color: "#10b981" },
	{ name: "CSS", percentage: 12, color: "#8b5cf6" },
	{ name: "Others", percentage: 8, color: "#64748b" },
];

export const COMMIT_DATA: CommitData[] = [
	{ date: "Aug 1", commits: 5 },
	{ date: "Aug 2", commits: 8 },
	{ date: "Aug 3", commits: 3 },
	{ date: "Aug 4", commits: 12 },
	{ date: "Aug 5", commits: 15 },
	{ date: "Aug 6", commits: 7 },
	{ date: "Aug 7", commits: 2 },
	{ date: "Aug 8", commits: 9 },
	{ date: "Aug 9", commits: 18 },
	{ date: "Aug 10", commits: 14 },
	{ date: "Aug 11", commits: 20 },
	{ date: "Aug 12", commits: 10 },
	{ date: "Aug 13", commits: 6 },
	{ date: "Aug 14", commits: 4 },
	{ date: "Aug 15", commits: 13 },
	{ date: "Aug 16", commits: 22 },
	{ date: "Aug 17", commits: 16 },
	{ date: "Aug 18", commits: 8 },
	{ date: "Aug 19", commits: 5 },
	{ date: "Aug 20", commits: 2 },
];
