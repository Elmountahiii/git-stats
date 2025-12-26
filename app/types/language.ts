export interface LanguageNode {
	name: string;
	color: string;
}

export interface LanguageEdge {
	size: number;
	node: LanguageNode;
}

export interface RepositoryNode {
	name: string;
	languages: {
		edges: LanguageEdge[];
	};
}

export interface LanguageGraphQLResponse {
	data?: {
		user: {
			repositories: {
				nodes: RepositoryNode[];
			};
		};
	};
	errors?: Array<{ message: string }>;
}

export interface LanguageStats {
	name: string;
	color: string;
	size: number;
	percentage: number;
}
