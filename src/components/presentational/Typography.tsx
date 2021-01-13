import React, { ComponentType, ReactNode, ReactText, useCallback } from "react";
import styled, { css } from "styled-components";

export type TypographyVariant =
	| "header1"
	| "header2"
	| "header3"
	| "subtitle1"
	| "caption"
	| "paragraph";

export type OverrideTag = "h1" | "h2" | "h3" | "span" | "p";

export interface TypographyProps {
	children: ReactNode;
	variant: TypographyVariant;
	as?: OverrideTag;
	className?: string;
}

export const baseTypographyStyle = css`
	font-size: 1.4rem;
	line-height: 2.8rem;
`;

const StyledHeading1 = styled.h1`
	${baseTypographyStyle}
	font-size: 3rem;
	font-family: SanFrancisco;
	color: #2bbc8a;
	margin: 1.2rem 0 1.2rem 0;
`;

const StyledHeading2 = styled.h2`
	${baseTypographyStyle}
	font-size: 2rem;
	font-family: SanFrancisco;
	color: #2bbc8a;
	margin: 0.8rem 0 0.8rem 0;
`;

const StyledHeading3 = styled.h3`
	${baseTypographyStyle}
	font-size: 1.6rem;
	font-family: Meslo;
	color: white;
	margin: 0.8rem 0 0.8rem 0;
`;

const StyledSubtitle1 = styled.p`
	${baseTypographyStyle}
	color: #49505e;
	font-size: 2rem;
	font-family: SanFrancisco;
`;

const StyledCaption = styled.p`
	${baseTypographyStyle}
	color: #49505e;
`;

const StyledParagraph = styled.p`
	${baseTypographyStyle}
`;

export const Typography = ({
	className,
	children,
	as,
	variant
}: TypographyProps) => {
	const getProps = useCallback(
		(key: ReactText) => ({
			key,
			as,
			className
		}),
		[]
	);

	const getSplitChildrenByLine = useCallback(() => {
		if (typeof children !== "string") {
			return [children];
		}
		return children
			.split("\n")
			.map((line) => line.trim())
			.filter((line) => line.length > 0);
	}, [children]);

	const renderText = useCallback(
		(Component: ComponentType) => {
			return (
				<>
					{getSplitChildrenByLine().map((line, index) => (
						<Component {...getProps(index)}>{line}</Component>
					))}
				</>
			);
		},
		[getSplitChildrenByLine]
	);

	switch (variant) {
		case "header1":
			return renderText(StyledHeading1);
		case "header2":
			return renderText(StyledHeading2);
		case "header3":
			return renderText(StyledHeading3);
		case "subtitle1":
			return renderText(StyledSubtitle1);
		case "paragraph":
			return renderText(StyledParagraph);
		case "caption":
			return renderText(StyledCaption);
		default:
			throw new Error(`Unknown variant ${variant}.`);
	}
};
