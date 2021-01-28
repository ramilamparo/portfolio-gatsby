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
import { Breakpoints } from "../../utils/styles/breakpoints";
import { Markdown } from "../presentational/Markdown";

interface PortfolioItemProps {
	data: StrapiResponse<"portfolio", StrapiPortfolio>;
}

const StyledIconLink = styled(IconLink)`
	& .icon {
		font-size: 2rem;
		vertical-align: middle;
	}
	margin-left: 1rem;
	@media (${Breakpoints.PHONE_ONLY}) {
		margin-right: 1rem;
	}
`;

const TitleContainer = styled.div`
	display: flex;
	align-items: center;

	@media (${Breakpoints.PHONE_ONLY}) {
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 1rem;
	}
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
			<TitleContainer>
				<Typography variant="header1">{data.strapi.portfolio.title}</Typography>
				<div>
					{renderLink(data.strapi.portfolio.githubLink, "Github Link", IoLogoGithub)}
					{renderLink(data.strapi.portfolio.demoLink, "Demo Link", IoGlobe)}
				</div>
			</TitleContainer>
			<Markdown>{data.strapi.portfolio.description}</Markdown>
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
