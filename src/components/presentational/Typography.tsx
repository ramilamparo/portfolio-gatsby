import React, { ComponentType, ReactNode, useCallback } from "react";
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
	maxLines?: number;
}

const LINE_HEIGHT = "2.8rem";

export const baseTypographyStyle = css`
	position: relative;
	font-size: 1.4rem;
	line-height: ${LINE_HEIGHT};
	color: white;
`;

const textOverflow = css<TypographyProps>`
	overflow: hidden;
	text-overflow: ellipsis;
	position: relative;
	height: calc(${LINE_HEIGHT} * ${(props) => props.maxLines});
	padding-right: 1rem; /* space for ellipsis */
	&::after {
		content: "";
		text-align: right;
		position: absolute;
		bottom: 0;
		right: 0;
		width: 50%;
		height: ${LINE_HEIGHT};
		background: linear-gradient(to right, transparent, #18181a 70%);
	}
`;

const handleMaxLines = (props: TypographyProps) =>
	props.maxLines ? textOverflow : "";

const StyledHeading1 = styled.h1`
	${baseTypographyStyle}
	${handleMaxLines}
	font-size: 3rem;
	font-family: SanFrancisco;
	color: #2bbc8a;
	margin: 1.2rem 0 1.2rem 0;
`;

const StyledHeading2 = styled.h2`
	${baseTypographyStyle}
	${handleMaxLines}
	font-size: 2rem;
	font-family: SanFrancisco;
	color: #2bbc8a;
	margin: 0.8rem 0 0.8rem 0;
`;

const StyledHeading3 = styled.h3`
	${baseTypographyStyle}
	${handleMaxLines}
	font-size: 1.6rem;
	font-family: Meslo;
	margin: 0.8rem 0 0.8rem 0;
`;

const StyledSubtitle1 = styled.p`
	${baseTypographyStyle}
	${handleMaxLines}
	color: #49505e;
	font-size: 2rem;
	font-family: SanFrancisco;
`;

const StyledCaption = styled.p`
	${baseTypographyStyle}
	${handleMaxLines}
	color: #49505e;
`;

const StyledParagraph = styled.p`
	${baseTypographyStyle}
	${handleMaxLines}
	white-space: pre-line;
`;

export const Typography = ({
	className,
	children,
	as,
	variant,
	maxLines
}: TypographyProps) => {
	const getProps = useCallback(
		() => ({
			as,
			className,
			maxLines
		}),
		[as, className]
	);

	const renderText = useCallback((Component: ComponentType) => {
		return (
			<>
				<Component {...getProps()}>{children}</Component>
			</>
		);
	}, []);

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
