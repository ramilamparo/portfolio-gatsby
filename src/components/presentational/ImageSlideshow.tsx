import React, { useCallback, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useSetInterval } from "../hooks/useSetInterval";

export interface ImageItem {
	src: string;
	alt: string;
}

export interface ImageSlideshowProps {
	images: ImageItem[];
	className?: string;
	pause?: boolean;
}

const VISIBLE_DURATION = 5;
const FADE_DURATION = 1;

const slideshowAnimation = keyframes`
	0% {
		opacity: 0;
	}
	10% {
		opacity: 1;
	}
	90% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
`;

const StyledImage = styled.img<{
	shouldFadeIn: boolean;
	fadeDuration: number;
	permanent?: boolean;
}>`
	opacity: ${(props) => (props.permanent ? "1" : "0")};
	animation-name: ${(props) =>
		!props.permanent && props.shouldFadeIn && slideshowAnimation};
	animation-duration: 5s;
	animation-timing-function: ease-out;
	animation-fill-mode: forwards;
	object-fit: contain;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 100%;
	height: 100%;
`;

const StyledImageContainer = styled.div`
	position: relative;
`;

export const ImageSlideshow = ({
	images,
	className,
	pause
}: ImageSlideshowProps) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const incrementImageIndex = useCallback(() => {
		if (!pause && images.length > 1) {
			const reachedMaxLength = images.length - 1 === currentImageIndex;
			if (reachedMaxLength) {
				setCurrentImageIndex(0);
			} else {
				setCurrentImageIndex(currentImageIndex + 1);
			}
		}
	}, [currentImageIndex, images, pause]);

	const shouldFadeIn = useCallback(
		(imageIndex: number) => {
			const shouldFadeIn = imageIndex === currentImageIndex;
			return shouldFadeIn;
		},
		[currentImageIndex]
	);

	const renderImages = useCallback(() => {
		return images.map((props, index) => {
			return (
				<StyledImage
					permanent={images.length <= 1}
					fadeDuration={FADE_DURATION}
					shouldFadeIn={shouldFadeIn(index)}
					key={props.src + props.alt}
					{...props}
				/>
			);
		});
	}, [images, shouldFadeIn]);

	useSetInterval(VISIBLE_DURATION, incrementImageIndex);

	return (
		<StyledImageContainer className={className}>
			{renderImages()}
		</StyledImageContainer>
	);
};
