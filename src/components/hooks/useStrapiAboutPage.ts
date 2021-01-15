import { graphql, useStaticQuery } from "gatsby";
import { StrapiResponse } from "../../typings/utils";

export interface StrapiAboutPage {
	id: string;
	aboutMe: string;
}

export interface SendMailOptions {
	subject: string;
	replyTo: string;
	body: string;
}

export const useStrapiAboutPage = (): StrapiAboutPage => {
	const query = useStaticQuery<
		StrapiResponse<"aboutPage", Pick<StrapiAboutPage, "id" | "aboutMe">>
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
