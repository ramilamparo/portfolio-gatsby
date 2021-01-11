import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export interface LinkProps {
	to: string;
	children: ReactNode;
	className?: string;
}

const baseStyle = css`
	font-size: 2rem;
`;

const StyledLink = styled(GatsbyLink)`
	${baseStyle}
`;

export const Link = ({ to, children, className }: LinkProps) => {
	return (
		<StyledLink className={className} to={to}>
			{children}
		</StyledLink>
	);
};
