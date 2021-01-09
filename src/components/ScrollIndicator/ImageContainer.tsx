import React from "react";
import styled, { css } from "styled-components";
import { HoverCard as HoverCardBase } from "../HoverCard";
import { ImageBox as ImageBoxBase } from "../ImageBox";

export interface ImageContainerProps {
	images: string[];
}

const Container = styled.div`
	position: relative;
	width: 40%;
	height: 80%;
	margin-right: 5%;
`;

const ImageBox = styled(ImageBoxBase)`
	height: 100%;
	width: 100%;
	border-radius: 1rem;
	object-fit: cover;
`;

const getImageStyle = (translateHover: string) => css`
	&:hover {
		transform: scale(1.2) translate(${translateHover});
	}
`;

const HoverCard = styled(HoverCardBase)`
	position: absolute;
	height: 50%;
	width: 50%;

	transition: all 200ms ease-out;
	transform-origin: top left;

	&:hover {
		z-index: 100;
	}

	&:nth-child(3) {
		top: 30%;
		left: 50%;
		transform: translate(-50%, -50%);
		${getImageStyle("-50%, -65%")};
	}

	&:nth-child(2) {
		top: 70%;
		left: 30%;
		transform: translate(-50%, -50%);
		${getImageStyle("-65%, -40%")}
	}

	&:nth-child(1) {
		top: 65%;
		left: 70%;
		transform: translate(-50%, -50%);
		${getImageStyle("-40%, -40%")}
	}

	&:nth-child(n + 3) {
		display: hidden;
	}
`;

export const ImageContainer = ({ images }: ImageContainerProps) => {
	return (
		<Container>
			{images.slice(0, 3).map((image, index) => (
				<HoverCard key={image + index}>
					<ImageBox disableHoverEffects src={image} alt="Project preview." />
				</HoverCard>
			))}
		</Container>
	);
};
