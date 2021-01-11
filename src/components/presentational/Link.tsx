import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { baseTypographyStyle } from "./Typography";

export interface LinkProps {
	to: string;
	children: ReactNode;
	className?: string;
}

const StyledLink = styled(GatsbyLink)`
	${baseTypographyStyle}
	text-decoration: none;
	&:hover,
	&:active,
	&:focus {
		text-decoration: underline;
	}
`;

export const Link = ({ to, children, className }: LinkProps) => {
	return (
		<StyledLink className={className} to={to}>
			{children}
		</StyledLink>
	);
};
