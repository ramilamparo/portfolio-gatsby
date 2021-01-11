import { graphql, useStaticQuery } from "gatsby";
import { GatsbyQueryMultiResponse } from "../../typings/utils";

export interface AllStrapiSkillsResponse {
	id: string;
	name: string;
}

export const useAllStrapiSkills = () => {
	const query = useStaticQuery<
		GatsbyQueryMultiResponse<AllStrapiSkillsResponse>
	>(graphql`
		{
			allStrapiSkills {
				nodes {
					id
					name
				}
			}
		}
	`);

	return query.allStrapiSkills.nodes;
};
