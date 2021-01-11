import React, { ReactText, useCallback } from "react";
import styled, { css } from "styled-components";

export type TypographyVariant =
	| "header1"
	| "header2"
	| "subtitle1"
	| "paragraph";

export interface TypographyProps {
	children: ReactText;
	variant: TypographyVariant;
}

export const baseTypographyStyle = css`
	@font-face {
		font-family: "Meslo";
		src: url("/fonts/MesloLGM-Regular.ttf");
	}
	@font-face {
		font-family: "Menlo";
		src: url("/fonts/Menlo-Regular.ttf");
	}
	@font-face {
		font-family: "SanFrancisco";
		src: url("/fonts/System San Francisco Display Regular.ttf");
	}

	font-size: 1.4rem;
	line-height: 2.8rem;
	color: white;
	font-family: Menlo, Meslo, -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const StyledHeading1 = styled.h1`
	${baseTypographyStyle}
	font-size: 3rem;
	font-family: SanFrancisco;
	color: #2bbc8a;
	margin: 1.2rem 0 1.2rem 0;
`;

const StyledHeading2 = styled.h1`
	${baseTypographyStyle}
	font-size: 2rem;
	font-family: SanFrancisco;
	color: #2bbc8a;
	margin: 0.8rem 0 0.8rem 0;
`;

const StyledSubtitle1 = styled.p`
	${baseTypographyStyle}
	color: #49505e;
	font-size: 2rem;
	font-family: SanFrancisco;
`;

const StyledParagraph = styled.p`
	${baseTypographyStyle}
`;

export const Typography = ({ children, variant }: TypographyProps) => {
	const getSplitChildrenByLine = useCallback(() => {
		if (typeof children === "number") {
			return [String(children)];
		}
		return children
			.split("\n")
			.map((line) => line.trim())
			.filter((line) => line.length > 0);
	}, [children]);

	const renderHeading1 = useCallback(() => {
		return (
			<>
				{getSplitChildrenByLine().map((line, index) => (
					<StyledHeading1 key={line + index}>{line}</StyledHeading1>
				))}
			</>
		);
	}, [getSplitChildrenByLine]);

	const renderHeading2 = useCallback(() => {
		return (
			<>
				{getSplitChildrenByLine().map((line, index) => (
					<StyledHeading2 key={line + index}>{line}</StyledHeading2>
				))}
			</>
		);
	}, [getSplitChildrenByLine]);

	const renderSubtitle1 = useCallback(() => {
		return (
			<>
				{getSplitChildrenByLine().map((line, index) => (
					<StyledSubtitle1 key={line + index}>{line}</StyledSubtitle1>
				))}
			</>
		);
	}, [getSplitChildrenByLine]);

	const renderParagraph = useCallback(() => {
		return (
			<>
				{getSplitChildrenByLine().map((line, index) => (
					<StyledParagraph key={line + index}>{line}</StyledParagraph>
				))}
			</>
		);
	}, [getSplitChildrenByLine]);

	switch (variant) {
		case "header1":
			return renderHeading1();
		case "header2":
			return renderHeading2();
		case "subtitle1":
			return renderSubtitle1();
		case "paragraph":
			return renderParagraph();
		default:
			throw new Error(`Unknown variant ${variant}.`);
	}
};
