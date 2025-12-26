export interface ContributionDay {
	contributionCount: number;
	date: string;
}

export interface ContributionWeek {
	contributionDays: ContributionDay[];
}

export interface CommitGraphQLResponse {
	data?: {
		user: {
			contributionsCollection: {
				contributionCalendar: {
					totalContributions: number;
					weeks: ContributionWeek[];
				};
			};
		};
	};
	errors?: Array<{ message: string }>;
}

export interface CommitActivity {
	date: string;
	commits: number;
}

export interface CommitActivityResponse {
	totalContributions: number;
	dailyActivity: CommitActivity[];
	weeklyActivity: { week: string; commits: number }[];
	monthlyActivity: { month: string; commits: number }[];
}
