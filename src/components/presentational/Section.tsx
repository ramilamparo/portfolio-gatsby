import React, { ReactNode } from "react";
import { Typography, TypographyVariant } from "./Typography";

export interface SectionProps {
	title: string;
	titleVariant?: TypographyVariant;
	children: ReactNode;
	id?: string;
}
export const Section = ({
	id,
	title,
	titleVariant = "header1",
	children
}: SectionProps) => {
	return (
		<section id={id}>
			<Typography variant={titleVariant}>{title}</Typography>
			{children}
		</section>
	);
};
