import { graphql, useStaticQuery } from "gatsby";
import { StrapiResponse } from "../../typings/utils";

export interface StrapiContactPage {
	id: string;
	email: string;
	githubLink: string;
	mobileNumber: string | null;
	lat: number;
	lng: number;
	linkedInLink: string;
}

export const useStrapiContactPage = () => {
	const query = useStaticQuery<
		StrapiResponse<"contactPage", StrapiContactPage>
	>(graphql`
		{
			strapi {
				contactPage {
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
	`);

	return query.strapi.contactPage;
};
