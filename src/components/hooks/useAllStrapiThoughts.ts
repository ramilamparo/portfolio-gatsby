import { graphql, useStaticQuery } from "gatsby";
import { GatsbyQueryMultiResponse } from "../../typings/utils";

export interface AllStrapiThoughtsResponse {
	id: string;
	thought: string;
}

export const useAllStrapiPortfolios = () => {
	const query = useStaticQuery<
		GatsbyQueryMultiResponse<AllStrapiThoughtsResponse>
	>(graphql`
		{
			allStrapiThoughts {
				nodes {
					id
					thought
				}
			}
		}
	`);

	return query.allStrapiThoughts.nodes;
};
