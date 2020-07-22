import React from "react";
import styled from "styled-components";

export type ImageItem = {
	src: string;
	alt: string;
};

export interface GridGalleryProps {
	images: ImageItem[];
	className?: string;
}

const Container = styled.div``;

const Gallery = styled.div``;

export const GridGallery = ({ images, className }: GridGalleryProps) => {
	return (
		<Container className={className}>
			<Gallery></Gallery>
		</Container>
	);
};
