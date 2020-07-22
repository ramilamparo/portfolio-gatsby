import React, { ReactElement, useCallback, useState } from "react";
import styled, { keyframes } from "styled-components";
import { IconButton } from "../IconButton";
import { GridGallery, ImageItem } from "../GridGallery";
import { gray2 } from "../../utils/colors";

export interface CarouselItemProps {
	title: string;
	images: ImageItem[];
	description: string;
	link?: string;
	github?: string;
}

const Container = styled.div`
	background-color: ${gray2};
	border-radius: 1rem;
	max-height: 90vh;
	padding: 3rem;
	width: 80%;
	display: flex;
	flex-direction: column;

	& > *:not(:last-child) {
		margin-bottom: 2rem;
	}
`;

const Title = styled.h2`
	font-size: 3rem;
`;

const Description = styled.div`
	font-size: 2rem;
	overflow-y: auto;
	flex-basis: 20vh;
`;

const LinkIcon = styled(IconButton)`
	font-size: 1.5rem;
`;

const LinkContainer = styled.div`
	margin-left: 2rem;

	& > *:not(:last-child) {
		margin-right: 2rem;
	}
`;

const Gallery = styled(GridGallery)`
	width: 100%;
	flex-basis: 60vh;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const CarouselItem = ({
	title,
	images,
	description,
	link,
	github
}: CarouselItemProps): ReactElement => {
	const [imageStack, setImageStack] = useState(images);

	const nextImage = useCallback(() => {
		const newImageStack = [...imageStack];
		const firstImage = newImageStack.shift();
		if (firstImage) {
			newImageStack.push(firstImage);
			setImageStack(newImageStack);
		}
	}, [imageStack]);

	return (
		<Container>
			<Header>
				<Title>{title}</Title>
				<LinkContainer>
					{link && (
						<LinkIcon
							icon="github"
							iconSource="jam"
							href={github}
							forwardAs="a"
							label="Website"
						/>
					)}
					{github && (
						<LinkIcon
							icon="github"
							iconSource="jam"
							href={github}
							forwardAs="a"
							label="GitHub"
						/>
					)}
				</LinkContainer>
			</Header>
			<Gallery images={images} />
			<Description>{description}</Description>
		</Container>
	);
};
