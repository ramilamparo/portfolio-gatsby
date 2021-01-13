import { graphql, useStaticQuery } from "gatsby";
import {
	SimplifiedStrapiMedia,
	StrapiMedia,
	StrapiResponse
} from "../../typings/utils";
import { ApiUtils } from "../../utils/ApiUtils";

interface StrapiPortfolio {
	id: string;
	title: string;
	description: string;
	companyName: string;
	screenshots: StrapiMedia[];
}

export interface AllStrapiPortfoliosResponse {
	id: string;
	title: string;
	description: string;
	companyName: string | null;
	screenshots: SimplifiedStrapiMedia[];
}

export const useStrapiPortfolios = (): AllStrapiPortfoliosResponse[] => {
	const query = useStaticQuery<
		StrapiResponse<"portfolios", StrapiPortfolio[]>
	>(graphql`
		{
			strapi {
				portfolios {
					id
					title
					description
					screenshots {
						formats
						url
					}
				}
			}
		}
	`);

	return query.strapi.portfolios.map((portfolio) => ({
		id: portfolio.id,
		title: portfolio.title,
		companyName: portfolio.companyName,
		description: portfolio.description,
		screenshots: portfolio.screenshots.map((screenshot) =>
			ApiUtils.getMediaUrls(screenshot)
		)
	}));
};
