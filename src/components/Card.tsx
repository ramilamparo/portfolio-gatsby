import React, { ReactElement, useState, useCallback } from "react";
import styled from "styled-components";
import { Icon } from "./Icon";
import { Description } from "./Description";
import { isTouch } from "../utils/isTouch";

export interface CardProps {
	github?: string;
	website?: string;
	image: string;
	title: string;
	description: string;
}

const Container = styled.div`
	transform: scale(1);
	perspective: 600px;
	transition: all 250ms ease-out;
	&:hover {
		z-index: 10;
		transform: scale(1.1);
	}
	display: inline-block;
`;

const Image = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
`;

const LinkContainer = styled.div``;

const Link = styled.a`
	color: white;

	&:not(:last-child) {
		padding-right: 1rem;
	}
`;

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 0.5rem 0.5rem 1rem;
	margin: 1rem;
	background-color: rgba(0, 0, 0, 0.3);
	border-radius: 100rem;
`;

const Title = styled.div``;

const FooterContainer = styled.div`
	background-color: rgba(0, 0, 0, 0.3);
`;

const DescriptionContainer = styled.div`
	margin: 1rem;
	height: 6rem;
	overflow-y: auto;
`;

const DescriptionText = styled(Description)``;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	height: 300px;
	width: 200px;
	border-radius: 0.5rem;
	overflow: hidden;
	font-size: 1.3rem;
`;

const map = (
	val: number,
	minA: number,
	maxA: number,
	minB: number,
	maxB: number
) => minB + ((val - minA) * (maxB - minB)) / (maxA - minA);

export const Card = ({
	title,
	description,
	github,
	website,
	image
}: CardProps): ReactElement => {
	const [containerEl, setContainerEl] = useState<HTMLDivElement | null>(null);
	const [contentEl, setContentEl] = useState<HTMLDivElement | null>(null);

	const handleMouseMove = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			const isTouchScreenDevice = isTouch();
			if (containerEl && !isTouchScreenDevice) {
				const {
					left: containerX,
					top: containerY
				} = containerEl.getBoundingClientRect();
				const { clientX, clientY } = e.nativeEvent;
				const mouseX = clientX - containerX;
				const mouseY = clientY - containerY;
				const rotateY = map(mouseX, 0, 180, -10, 10);
				const rotateX = map(mouseY, 0, 250, 10, -10);
				const brightness = map(mouseY, 0, 250, 1, 0.7);

				if (contentEl) {
					contentEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
					contentEl.style.filter = `brightness(${brightness})`;
				}
			}
		},
		[containerEl]
	);

	const handleMouseLeave = useCallback(() => {
		if (contentEl) {
			contentEl.style.transform = "rotate(0deg) rotateY(0deg)";
			contentEl.style.filter = "brightness(1)";
		}
	}, [containerEl]);

	return (
		<Container
			ref={(el) => el && setContainerEl(el)}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<Content ref={(el) => el && setContentEl(el)}>
				<Image src={image} alt={title} />
				<HeaderContainer>
					<Title>{title}</Title>
					<LinkContainer>
						{website && (
							<Link href={website}>
								<Icon source="jam">world</Icon>
							</Link>
						)}
						{github && (
							<Link href={github}>
								<Icon source="jam">github-circle</Icon>
							</Link>
						)}
					</LinkContainer>
				</HeaderContainer>
				<FooterContainer>
					<DescriptionContainer>
						<DescriptionText>{description}</DescriptionText>
					</DescriptionContainer>
				</FooterContainer>
			</Content>
		</Container>
	);
};
