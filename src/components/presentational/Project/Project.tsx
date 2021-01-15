import React from "react";
import { ImageItem, ImageSlideshow } from "../ImageSlideshow";
import {
	ProjectDescription,
	ProjectDescriptionProps
} from "./ProjectDescription";

export interface ProjectProps extends ProjectDescriptionProps {
	thumbnails: ImageItem[];
}

export const Project = ({
	thumbnails,
	...projectDescriptionProps
}: ProjectProps) => {
	return (
		<div>
			<ImageSlideshow images={thumbnails} />
			<ProjectDescription {...projectDescriptionProps} />
		</div>
	);
};
