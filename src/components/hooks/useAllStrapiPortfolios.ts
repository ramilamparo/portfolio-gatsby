import { graphql, useStaticQuery } from "gatsby";
import { GatsbyQueryMultiResponse } from "../../typings/utils";

type StrapiScreenshotFormatType = "thumbnail" | "large" | "medium" | "small";

interface StrapiScreenshotFormat {
	url: string;
}

interface StrapiScreenshot {
	formats: Record<StrapiScreenshotFormatType, StrapiScreenshotFormat>;
	url: string;
}

interface StrapiPortfolio {
	id: string;
	title: string;
	description: string;
	companyName: string;
	screenshots: StrapiScreenshot[];
}

interface Screenshot {
	thumbnail: string;
	small: string;
	medium: string;
	large: string;
	original: string;
}

export interface AllStrapiPortfoliosResponse {
	id: string;
	title: string;
	description: string;
	companyName: string | null;
	screenshots: Screenshot[];
}

export const useAllStrapiPortfolios = (): AllStrapiPortfoliosResponse[] => {
	const query = useStaticQuery<
		GatsbyQueryMultiResponse<StrapiPortfolio>
	>(graphql`
		{
			allStrapiPortfolios {
				nodes {
					id
					title
					description
					screenshots {
						formats {
							thumbnail {
								url
							}
							small {
								url
							}
							medium {
								url
							}
							large {
								url
							}
						}
						url
					}
				}
			}
		}
	`);

	return query.allStrapiPortfolios.nodes.map((portfolio) => ({
		id: portfolio.id,
		title: portfolio.title,
		companyName: portfolio.companyName,
		description: portfolio.description,
		screenshots: portfolio.screenshots.map((screenshot) => ({
			thumbnail: screenshot.formats.thumbnail.url,
			small: screenshot.formats.small.url,
			medium: screenshot.formats.medium.url,
			large: screenshot.formats.large.url,
			original: screenshot.url
		}))
	}));
};
