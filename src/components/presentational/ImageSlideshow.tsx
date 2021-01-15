import React from "react";
import styled from "styled-components";

export interface ImageItem {
	src: string;
	alt: string;
}

export interface ImageSlideshowProps {
	images: ImageItem[];
	className?: string;
}

const StyledImage = styled.img`
	object-fit: scale-down;
`;

const StyledImageContainer = styled.div`
	height: 8rem;
	width: 12rem;
`;

export const ImageSlideshow = ({ images, className }: ImageSlideshowProps) => {
	return (
		<StyledImageContainer className={className}>
			{images.map((props) => (
				<StyledImage key={props.src + props.alt} {...props} />
			))}
		</StyledImageContainer>
	);
};
