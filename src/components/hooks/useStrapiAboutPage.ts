import { graphql, useStaticQuery } from "gatsby";
import { StrapiResponse } from "../../typings/utils";

export interface StrapiAboutPage {
	id: string;
	aboutMe: string;
}

export const useStrapiAboutPage = () => {
	const query = useStaticQuery<
		StrapiResponse<"aboutPage", StrapiAboutPage>
	>(graphql`
		{
			strapi {
				aboutPage {
					aboutMe
				}
			}
		}
	`);

	return query.strapi.aboutPage;
};
