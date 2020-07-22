import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "./Modal";
import { Icon } from "./Icon";

export interface ImageBoxProps {
	/** Image src. */
	src: string;
	/** Image alt. */
	alt: string;
	className?: string;
}

const Image = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

const FullImage = styled.img`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	height: 90vh;
`;

const Container = styled.div`
	display: inline-block;
	position: relative;
	cursor: pointer;
	overflow: hidden;

	&:hover {
		& img {
			filter: blur(1px);
		}
		&::before {
			opacity: 1;
			z-index: 1;
		}
		& span {
			opacity: 1;
			z-index: 1;
		}
	}

	&::before {
		opacity: 0;
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		transition: all 100ms linear;
	}

	& span {
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		font-size: 4rem;
		transform: translate(-50%, -50%);
		transition: all 100ms linear;
	}
`;

export const ImageBox = ({ src, alt, className }: ImageBoxProps) => {
	const [fullScreen, setFullScreen] = useState(false);
	return (
		<>
			<Container className={className} onClick={() => setFullScreen(true)}>
				<Image src={src} alt={alt} />
				<Icon>fullscreen</Icon>
			</Container>
			<Modal open={fullScreen} onClose={() => setFullScreen(false)}>
				<FullImage onClick={() => setFullScreen(false)} src={src} alt={alt} />
			</Modal>
		</>
	);
};
