export interface ContributionDay {
	contributionCount: number;
	date: string;
}

export interface ContributionWeek {
	contributionDays: ContributionDay[];
}

export interface StatsGraphQLResponse {
	data?: {
		user: {
			contributionsCollection: {
				totalCommitContributions: number;
				restrictedContributionsCount: number;
				contributionCalendar: {
					totalContributions: number;
					weeks: ContributionWeek[];
				};
			};
			followers: {
				totalCount: number;
			};
		};
	};
	errors?: Array<{ message: string }>;
}

export interface UserStats {
	universalRank: string;
	longestStreak: number;
	totalCommits: number;
	mostActiveMonth: string;
}
