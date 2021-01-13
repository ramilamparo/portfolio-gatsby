import React, { ReactNode } from "react";
import styled from "styled-components";
import { Typography, TypographyVariant } from "./Typography";

export interface SectionProps {
	title: string;
	titleVariant?: TypographyVariant;
	className?: string;
	children: ReactNode;
	id?: string;
}

const StyledSection = styled.section`
	margin: 5rem 0;
`;

export const Section = ({
	id,
	title,
	titleVariant = "header1",
	children,
	className
}: SectionProps) => {
	return (
		<StyledSection className={className} id={id}>
			<Typography variant={titleVariant}>{title}</Typography>
			{children}
		</StyledSection>
	);
};
