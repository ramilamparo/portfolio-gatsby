import React from "react";
import styled from "styled-components";
import { ImageItem, ImageSlideshow } from "../ImageSlideshow";
import {
	ProjectDescription,
	ProjectDescriptionProps
} from "./ProjectDescription";

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
