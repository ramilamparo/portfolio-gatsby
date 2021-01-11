import React, { ReactText, useCallback } from "react";
import styled, { css } from "styled-components";

export type TypographyVariant = "header1" | "paragraph";

export interface TypographyProps {
	children: ReactText;
	variant: TypographyVariant;
}

const baseStyle = css``;

const StyledHeading1 = styled.h1`
	${baseStyle}
`;

const StyledParagraph = styled.p`
	${baseStyle}
`;

export const Typography = ({ children, variant }: TypographyProps) => {
	const renderHeading1 = useCallback(() => {
		return <StyledHeading1>{children}</StyledHeading1>;
	}, [children]);

	const renderParagraph = useCallback(() => {
		return <StyledParagraph>{children}</StyledParagraph>;
	}, [children]);

	switch (variant) {
		case "header1":
			return renderHeading1();
		case "paragraph":
			return renderParagraph();
		default:
			throw new Error(`Unknown variant ${variant}.`);
	}
};
