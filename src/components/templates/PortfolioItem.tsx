import type { ComponentType } from "react";
import React, { useCallback } from "react";
import { graphql } from "gatsby";
import { IoGlobe, IoLogoGithub } from "react-icons/io5";
import styled from "styled-components";
import type { StrapiPortfolio } from "../hooks/useStrapiPortfolios";
import type { StrapiResponse } from "../../typings/utils";
import { ApiUtils } from "../../utils/ApiUtils";
import { Helmet } from "../utils/Helmet";
import { ImageCarousel } from "../presentational/ImageCarousel";
import { Typography } from "../presentational/Typography";
import { IconLink } from "../presentational/IconLink";

interface PortfolioItemProps {
	data: StrapiResponse<"portfolio", StrapiPortfolio>;
}

const StyledIconLink = styled(IconLink)`
	font-size: 2rem;
`;

const PortfolioItem = ({ data }: PortfolioItemProps) => {
	const fileUrls = data.strapi.portfolio.screenshots.map(ApiUtils.getMediaUrls);
	const renderLink = useCallback(
		(to: string | null, srLabel: string, logo: ComponentType) => {
			if (!to) {
				return null;
			}
			return <StyledIconLink to={to} icon={logo} srLabel={srLabel} />;
		},
		[]
	);

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
			<Typography variant="header1">{data.strapi.portfolio.title}</Typography>
			{renderLink(data.strapi.portfolio.githubLink, "Github Link", IoLogoGithub)}
			{renderLink(data.strapi.portfolio.demoLink, "Demo Link", IoGlobe)}
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
