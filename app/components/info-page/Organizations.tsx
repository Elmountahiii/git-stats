import React from "react";
import Image from "next/image";
import { ORGANIZATIONS } from "@/app/utils/constants";

const Organizations = () => {
	return (
		<div className="bg-card-dark rounded-2xl border border-gray-800 p-6 shadow-sm">
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-sm font-bold text-white uppercase tracking-wide">
					Organizations
				</h3>
				<span className="text-xs bg-surface text-text-secondary px-2 py-1 rounded-md">
					{ORGANIZATIONS.length}
				</span>
			</div>
			<div className="flex gap-3">
				{ORGANIZATIONS.map((org) => (
					<div
						key={org.name}
						title={org.name}
						className="w-12 h-12 rounded-xl bg-surface p-2 border border-gray-800 hover:border-primary/50 hover:shadow-md transition-all group"
					>
						<Image
							src={org.logo}
							alt={org.name}
							width={48}
							height={48}
							className="w-full h-full object-contain rounded opacity-80 group-hover:opacity-100 transition-opacity"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Organizations;