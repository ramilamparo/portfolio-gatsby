export interface GatsbyQueryResponse<Data> {
	[key: string]: {
		edges: [
			{
				node: Data;
			}
		];
	};
}

export interface GatsbyQueryMultiResponse<Data> {
	[key: string]: {
		nodes: Data[];
	};
}
