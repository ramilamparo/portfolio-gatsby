import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export interface LinkProps {
	to: string;
	children: ReactNode;
}

const StyledLink = styled(GatsbyLink)`
	font-size: 2rem;
`;

export const Link = ({ to, children }: LinkProps) => {
	return <StyledLink to={to}>{children}</StyledLink>;
};
