import React from "react";
import { graphql } from "gatsby";
import type { StrapiPortfolio } from "../hooks/useStrapiPortfolios";
import { StrapiResponse } from "../../typings/utils";
import { ApiUtils } from "../../utils/ApiUtils";
import { Helmet } from "../utils/Helmet";

interface PortfolioItemProps {
	data: StrapiResponse<"portfolio", StrapiPortfolio>;
}

export default (props: PortfolioItemProps) => {
	const fileUrls = props.data.strapi.portfolio.screenshots.map(
		ApiUtils.getMediaUrls
	);

	return (
		<Helmet title={`Ramil Amparo - ${props.data.strapi.portfolio.title}`} />
	);
};

export const query = graphql`
	query($portfolioId: ID!) {
		strapi {
			portfolio(id: $portfolioId) {
				id
				title
				githubLink
				demoLink
				description
				screenshots {
					formats
					url
				}
			}
		}
	}
`;
