import React, { ReactElement } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { SEO } from "../components/utils/SEO";
import { ScrollIndicator } from "../components/ScrollIndicator/ScrollIndicator";

interface PortfolioProps {
	data: {
		allStrapiPortfolios: {
			nodes: Array<{
				strapiId: number;
				title: string;
				description: string;
				previewImage: Array<{
					url: string;
				}>;
			}>;
		};
	};
}

const CardContainer = styled.div`
	height: 100%;
`;

export default ({ data }: PortfolioProps): ReactElement => {
	return (
		<>
			<SEO title={"Portfolio"} />
			<CardContainer>
				<ScrollIndicator
					sections={data.allStrapiPortfolios.nodes.map((item) => ({
						description: item.description,
						id: item.title.replace(" ", ""),
						images: item.previewImage.map((image) => image.url),
						label: item.title,
						title: item.title
					}))}
				/>
			</CardContainer>
		</>
	);
};

export const query = graphql`
	query {
		allStrapiPortfolios {
			nodes {
				strapiId
				title
				description
				previewImage {
					url
				}
			}
		}
	}
`;
