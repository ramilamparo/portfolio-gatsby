import React from "react";
import styled from "styled-components";
import type { ImageItem } from "../ImageSlideshow";
import { ImageSlideshow } from "../ImageSlideshow";
import type { ProjectDescriptionProps } from "./ProjectDescription";
import { ProjectDescription } from "./ProjectDescription";

export interface ProjectProps extends ProjectDescriptionProps {
	thumbnails: ImageItem[];
}

const ProjectContainer = styled.div`
	display: grid;
	grid-template-columns: 14rem auto;
	grid-gap: 2rem;

	&:not(:last-child) {
		margin-bottom: 2rem;
	}
`;

const StyledImageSlideshow = styled(ImageSlideshow)`
	height: 12rem;
	margin: 2rem;
`;

export const Project = ({
	thumbnails,
	...projectDescriptionProps
}: ProjectProps) => {
	return (
		<ProjectContainer>
			<StyledImageSlideshow images={thumbnails} />
			<ProjectDescription {...projectDescriptionProps} />
		</ProjectContainer>
	);
};
