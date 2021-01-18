import { graphql, useStaticQuery } from "gatsby";
import {
	SimplifiedStrapiMedia,
	StrapiMedia,
	StrapiResponse
} from "../../typings/utils";
import { ApiUtils } from "../../utils/ApiUtils";

export interface StrapiPortfolio {
	id: string;
	title: string;
	description: string;
	screenshots: StrapiMedia[];
	githubLink: string | null;
	demoLink: string | null;
}

export interface UseStrapiPortfolioData {
	id: string;
	title: string;
	description: string;
	githubLink: string | null;
	demoLink: string | null;
	screenshots: SimplifiedStrapiMedia[];
}

export const useStrapiPortfolios = (): UseStrapiPortfolioData[] => {
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
					githubLink
					demoLink
				}
			}
		}
	`);

	return query.strapi.portfolios.map((portfolio) => ({
		id: portfolio.id,
		title: portfolio.title,
		description: portfolio.description,
		screenshots: portfolio.screenshots.map((screenshot) =>
			ApiUtils.getMediaUrls(screenshot)
		),
		demoLink: portfolio.demoLink,
		githubLink: portfolio.githubLink
	}));
};
