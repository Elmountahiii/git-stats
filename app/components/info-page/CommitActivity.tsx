import { CommitActivityResponse } from "@/app/types/commit";
import { HttpResponse } from "@/app/types/http-response";
import CommitActivityChart from "./CommitActivityChart";

interface CommitActivityProps {
	username: string;
}

const CommitActivity = async ({ username }: CommitActivityProps) => {
	const rawResponse = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/commits?username=${username}`,
	);

	if (!rawResponse.ok) {
		throw new Error("Failed to fetch commit activity data");
	}

	const response: HttpResponse<CommitActivityResponse> =
		await rawResponse.json();
	const data = response.data;

	// Format daily data for chart (last 30 days shown by default)
	const dailyData = data.dailyActivity.map((day) => {
		const date = new Date(day.date);
		return {
			date: date.toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
			}),
			commits: day.commits,
		};
	});

	// Format weekly data for chart
	const weeklyData = data.weeklyActivity.map((week) => {
		const date = new Date(week.week);
		return {
			date: date.toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
			}),
			commits: week.commits,
		};
	});

	// Format monthly data for chart
	const monthlyData = data.monthlyActivity.map((month) => ({
		date: month.month,
		commits: month.commits,
	}));

	return (
		<CommitActivityChart
			dailyData={dailyData}
			weeklyData={weeklyData}
			monthlyData={monthlyData}
		/>
	);
};

export default CommitActivity;
