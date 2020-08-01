import React, { useRef, useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import { ScrollSectionProps, ScrollSection } from "./ScrollSection";

export interface Section extends ScrollSectionProps {
	label: string;
	/** Unique string for handling scrolling skips. */
	id: string;
}

export interface ScrollIndicatorProps {
	sections: Section[];
}

interface ScrollSectionState extends Pick<Section, "id" | "label"> {
	distance: number;
}

const SectionContainer = styled.div`
	overflow-y: auto;
	scroll-behavior: smooth;
	flex-grow: 1;
`;

const Container = styled.div`
	height: 100%;
	display: flex;
`;

const IndicatorItemLink = styled.a`
	color: white;
	text-decoration: none;
	opacity: 0;
	transition: all 500ms linear;
	font-size: 1.3rem;
`;

const IndicatorItemBar = styled.div`
	height: 0.5rem;
	width: 100%;
	max-width: 5rem;
	background-color: white;
	transform-origin: left;
	transition: all 200ms linear;
`;

const IndicatorItem = styled.div`
	position: relative;

	&:not(:last-child) {
		margin-bottom: 2rem;
	}

	& > * {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	&:hover {
		& > div {
			opacity: 0;
		}

		& > a {
			opacity: 1;
		}
	}
`;

const IndicatorContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 8rem;
	justify-content: center;
`;

const clamp = (value: number, min: number, max: number): number =>
	Math.min(Math.max(value, min), max);

/**
 * Returns how far the element is in the center of the container.
 * 0 = top of element not visible in container.
 * 1 = top of element is in center of the container.
 * Note: Only checks the Y scroll axis.
 */
const getSectionDistance = (
	el: HTMLElement,
	containerEl: HTMLElement
): number => {
	const elRect = el.getBoundingClientRect();
	const containerRect = containerEl.getBoundingClientRect();
	const elCenterPos =
		elRect.top +
		elRect.height / 2 -
		(containerRect.top + containerRect.height / 2);
	const boundDistance = clamp(Math.abs(elCenterPos), 0, containerRect.height);
	return 1 - boundDistance / containerRect.height;
};

export const ScrollIndicator = ({ sections }: ScrollIndicatorProps) => {
	const containerEl = useRef<HTMLDivElement | null>(null);
	const sectionContainerEl = useRef<HTMLDivElement | null>(null);
	const [sectionStatus, setSectionStatus] = useState<ScrollSectionState[]>([]);

	const updateSectionScrollIndicator = useCallback(() => {
		if (sectionContainerEl.current && containerEl.current) {
			const children = sectionContainerEl.current.querySelectorAll("section");
			const sectionVisibility: ScrollSectionState[] = [];
			children.forEach((node) => {
				const sectionProp = sections.find((s) => s.id === node.id);
				if (sectionProp && containerEl.current) {
					const distance = getSectionDistance(node, containerEl.current);
					const { id, label } = sectionProp;
					sectionVisibility.push({
						id,
						label,
						distance
					});
				}
			});
			setSectionStatus(sectionVisibility);
		}
	}, [sectionContainerEl.current]);

	useEffect(() => {
		updateSectionScrollIndicator();
	}, []);

	return (
		<Container ref={containerEl}>
			<IndicatorContainer>
				{sectionStatus.map((p) => (
					<IndicatorItem key={p.id}>
						<IndicatorItemBar
							style={{
								transform: `scaleX(${clamp(
									p.distance / 1,
									0.1,
									1
								)}) translate(-50%, -50%)`
							}}
						/>
						<IndicatorItemLink href={`#${p.id}`}>{p.label}</IndicatorItemLink>
					</IndicatorItem>
				))}
			</IndicatorContainer>
			<SectionContainer
				onScroll={updateSectionScrollIndicator}
				ref={sectionContainerEl}
			>
				{sections.map(({ id, images, description }) => (
					<ScrollSection
						key={id}
						id={id}
						images={images}
						description={description}
					/>
				))}
			</SectionContainer>
		</Container>
	);
};
