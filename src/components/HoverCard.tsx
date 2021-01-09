import React, { ReactElement, useState, useCallback, ReactNode } from "react";
import styled from "styled-components";
import { isTouch } from "../utils/isTouch";

export interface HoverCardProps {
	children: ReactNode;
	className?: string;
}

const Container = styled.div`
	perspective: 600px;
`;

const Content = styled.div`
	height: 100%;
	width: 100%;
	transition: all 100ms ease-out;
`;

const map = (
	val: number,
	minA: number,
	maxA: number,
	minB: number,
	maxB: number
) => minB + ((val - minA) * (maxB - minB)) / (maxA - minA);

export const HoverCard = ({
	children,
	className
}: HoverCardProps): ReactElement => {
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
			className={className}
		>
			<Content ref={(el) => el && setContentEl(el)}>{children}</Content>
		</Container>
	);
};
