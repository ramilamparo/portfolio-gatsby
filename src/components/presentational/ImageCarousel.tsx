import React, { useCallback, useMemo, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import styled from "styled-components";
import { useSetInterval } from "../hooks/useSetInterval";
import { IconButton } from "./IconButton";
import { Typography } from "./Typography";

export interface ImageCarouselItem {
	src: string;
	alt: string;
}

export interface ImageCarouselProps {
	autoplay?: boolean;
	images: ImageCarouselItem[];
	className?: string;
}

interface StyledImageSlideContainerProps {
	counter: number;
	imageCount: number;
	smoothTransition: boolean;
}

const StyledImage = styled.img`
	width: 100%;
	object-fit: contain;
`;

const StyledImageContainer = styled.div<
	Pick<StyledImageSlideContainerProps, "imageCount">
>`
	width: calc(100% / ${(props) => props.imageCount});
	height: 100%;
	display: inline-flex;
	justify-content: center;
`;

const StyledImageSlideContainer = styled.div.attrs<StyledImageSlideContainerProps>(
	(props) => ({
		style: {
			transform: `translateX(calc((100% / ${
				props.imageCount
			}) * ${-props.counter}))`
		}
	})
)<StyledImageSlideContainerProps>`
	width: calc(100% * ${(props) => props.imageCount});
	height: 50rem;
	transition: ${(props) =>
		props.smoothTransition ? "transform 0.4s ease-in-out" : ""};
`;

const StyledImageCarouselContainer = styled.div`
	width: 60%;
	margin: auto;
	overflow: hidden;
`;

const StyledButtonContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const StyledIconButton = styled(IconButton)`
	margin: 1rem;
`;

const StyledFooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ImageCarousel = ({
	autoplay,
	images,
	className
}: ImageCarouselProps) => {
	const [counter, setCounter] = useState(1);
	const [smoothTransition, setSmoothTransition] = useState(true);
	const [isMouseHovered, setIsMouseHovered] = useState(false);

	const clonedImages = useMemo(() => {
		const firstImage = images[0];
		const lastImage = images[images.length - 1];
		return [lastImage, ...images, firstImage];
	}, [images]);

	const pageIndex = useMemo(() => {
		if (counter === 0) {
			return clonedImages.length - 2;
		} else if (counter === clonedImages.length - 1) {
			return 1;
		}
		return counter;
	}, [clonedImages, counter]);

	const rearrangeImages = useCallback(() => {
		const stateImagesDup = [...images];
		const firstImage = stateImagesDup.shift();
		const lastImage = stateImagesDup.pop();
		if (firstImage && lastImage) {
			if (counter === 0) {
				setSmoothTransition(false);
				setCounter(clonedImages.length - 2);
			} else if (counter === clonedImages.length - 1) {
				setSmoothTransition(false);
				setCounter(1);
			}
		}
	}, [clonedImages, images, counter]);

	const goBack = useCallback(() => {
		if (counter > 0) {
			setSmoothTransition(true);
			setCounter(counter - 1);
		}
	}, [counter]);

	const goForward = useCallback(() => {
		if (counter < clonedImages.length - 1) {
			setSmoothTransition(true);
			setCounter(counter + 1);
		}
	}, [counter, clonedImages]);

	const renderImages = useCallback(() => {
		return clonedImages.map((image, index) => {
			return (
				<StyledImageContainer
					imageCount={clonedImages.length}
					key={`${image.src}${image.alt}${index}`}
				>
					<StyledImage src={image.src} alt={image.alt} />
				</StyledImageContainer>
			);
		});
	}, [clonedImages]);

	useSetInterval(5, () => {
		if (autoplay && !isMouseHovered) {
			goForward();
		}
	});

	const handleMouseEnter = useCallback(() => {
		setIsMouseHovered(true);
	}, []);

	const handleMouseLeave = useCallback(() => {
		setIsMouseHovered(false);
	}, []);

	return (
		<StyledImageCarouselContainer
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={className}
		>
			<StyledImageSlideContainer
				onTransitionEnd={rearrangeImages}
				smoothTransition={smoothTransition}
				imageCount={clonedImages.length}
				counter={counter}
			>
				{renderImages()}
			</StyledImageSlideContainer>
			<StyledFooterContainer>
				<StyledButtonContainer>
					<StyledIconButton
						srLabel="Carousel move backward"
						icon={IoChevronBack}
						onClick={goBack}
					/>
					<StyledIconButton
						srLabel="Carousel move forward"
						icon={IoChevronForward}
						onClick={goForward}
					/>
				</StyledButtonContainer>
				<Typography variant="paragraph">{`${pageIndex} of ${images.length}`}</Typography>
			</StyledFooterContainer>
		</StyledImageCarouselContainer>
	);
};
