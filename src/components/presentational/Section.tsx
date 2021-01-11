import React, { ReactNode } from "react";

export interface SectionProps {
	title: string;
	children: ReactNode;
	id?: string;
}
export const Section = ({ id, title, children }: SectionProps) => {
	return (
		<section id={id}>
			<h1>{title}</h1>
			{children}
		</section>
	);
};
