import React from "react";
import styled from "styled-components";
import { ImageContainer } from "./ImageContainer";
import { Description } from "./Description";

export interface ScrollSectionProps {
	description: string;
	id: string;
	images: string[];
}

const Section = styled.section`
	height: 100%;
	background-color: blue;
	box-sizing: border-box;
	border: solid white 1px;
	display: flex;
	justify-content: space-between;
`;

export const ScrollSection = ({
	description,
	images,
	id
}: ScrollSectionProps) => {
	return (
		<Section id={id}>
			<Description>{description}</Description>
			<ImageContainer images={images} />
		</Section>
	);
};
