import React, { ComponentType, useCallback } from "react";
import { graphql } from "gatsby";
import { IoGlobe, IoLogoGithub } from "react-icons/io5";
import type { StrapiPortfolio } from "../hooks/useStrapiPortfolios";
import { StrapiResponse } from "../../typings/utils";
import { ApiUtils } from "../../utils/ApiUtils";
import { Helmet } from "../utils/Helmet";
import { ImageCarousel } from "../presentational/ImageCarousel";
import { Typography } from "../presentational/Typography";
import { Icon } from "../presentational/Icon";
import { Link } from "../presentational/Link";

interface PortfolioItemProps {
	data: StrapiResponse<"portfolio", StrapiPortfolio>;
}

const PortfolioItem = ({ data }: PortfolioItemProps) => {
	const fileUrls = data.strapi.portfolio.screenshots.map(ApiUtils.getMediaUrls);
	const renderLink = useCallback((to: string | null, logo: ComponentType) => {
		if (!to) {
			return null;
		}
		return (
			<Link to={to}>
				<Icon srLabel="Demo" icon={logo} />
			</Link>
		);
	}, []);

	return (
		<>
			<Helmet title={`Ramil Amparo - ${data.strapi.portfolio.title}`} />
			<ImageCarousel
				autoplay
				images={fileUrls.map((file, index) => ({
					src: file.original,
					alt: `${data.strapi.portfolio.title} screenshot ${index + 1}`
				}))}
			/>
			{renderLink(data.strapi.portfolio.githubLink, IoLogoGithub)}
			{renderLink(data.strapi.portfolio.demoLink, IoGlobe)}
			<Typography variant="header1">{data.strapi.portfolio.title}</Typography>
			<Typography variant="paragraph">
				{data.strapi.portfolio.description}
			</Typography>
		</>
	);
};

export default PortfolioItem;

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
