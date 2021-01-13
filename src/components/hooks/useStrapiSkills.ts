import { graphql, useStaticQuery } from "gatsby";
import { StrapiResponse } from "../../typings/utils";

export interface StrapiSkill {
	id: string;
	name: string;
}

export const useStrapiSkills = () => {
	const query = useStaticQuery<StrapiResponse<"skills", StrapiSkill>>(graphql`
		{
			strapi {
				skills {
					id
					name
				}
			}
		}
	`);

	return query.strapi.skills;
};
