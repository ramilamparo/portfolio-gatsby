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
	display: flex;
`;

const StyledImageSlideshow = styled(ImageSlideshow)`
	flex-basis: 70rem;
	height: 15rem;
	margin-right: 5rem;
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
