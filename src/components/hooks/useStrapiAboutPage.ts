import { graphql, useStaticQuery } from "gatsby";
import { GatsbyQueryResponse } from "../../typings/utils";

export interface AboutPageResponse {
	id: string;
	aboutMe: string;
}

export const useStrapiAboutPage = () => {
	const query = useStaticQuery<GatsbyQueryResponse<AboutPageResponse>>(graphql`
		{
			allStrapiAboutPage {
				edges {
					node {
						id
						aboutMe
					}
				}
			}
		}
	`);

	return query.allStrapiAboutPage.edges[0].node;
};
