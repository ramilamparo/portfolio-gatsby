import { graphql, useStaticQuery } from "gatsby";
import { StrapiResponse } from "../../typings/utils";

export interface StrapiThoughts {
	id: string;
	thought: string;
}

export const useStrapiPortfolios = () => {
	const query = useStaticQuery<
		StrapiResponse<"thoughts", StrapiThoughts[]>
	>(graphql`
		{
			strapi {
				thoughts {
					id
					thought
				}
			}
		}
	`);

	return query.strapi.thoughts;
};
