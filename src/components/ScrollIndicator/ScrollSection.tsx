import React from "react";
import styled from "styled-components";
import { ImageContainer } from "./ImageContainer";
import { Description } from "./Description";

export interface ScrollSectionProps {
	description: string;
	id: string;
	images: string[];
	title: string;
}

const Section = styled.section`
	height: 100%;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	overflow-x: hidden;
`;

export const ScrollSection = ({
	description,
	images,
	id,
	title
}: ScrollSectionProps) => {
	return (
		<Section id={id}>
			<Description title={title}>{description}</Description>
			<ImageContainer images={images} />
		</Section>
	);
};
