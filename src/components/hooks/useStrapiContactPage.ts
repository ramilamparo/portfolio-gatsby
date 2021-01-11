import { graphql, useStaticQuery } from "gatsby";
import { GatsbyQueryResponse } from "../../typings/utils";

export interface ContactPageResponse {
	id: string;
	email: string;
	githubLink: string;
	mobileNumber: string | null;
	lat: number;
	lng: number;
	linkedInLink: string;
}

export const useStrapiContactPage = () => {
	const query = useStaticQuery<GatsbyQueryResponse<ContactPageResponse>>(graphql`
		{
			allStrapiContactPage {
				edges {
					node {
						id
						email
						githubLink
						mobileNumber
						lat
						lng
						linkedInLink
					}
				}
			}
		}
	`);

	return query.allStrapiContactPage.edges[0].node;
};
