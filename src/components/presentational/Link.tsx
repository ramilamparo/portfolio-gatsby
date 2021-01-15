import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { baseTypographyStyle } from "./Typography";

export interface LinkProps {
	to: string;
	children: ReactNode;
	className?: string;
}

const StyledLink = styled.a`
	${baseTypographyStyle}
	text-decoration: none;
	&:hover,
	&:active,
	&:focus {
		text-decoration: underline;
	}
`;

const isUrlSameDomainRegexp = /\/^/;

const isUrlSameDomain = (url: string) => {
	return isUrlSameDomainRegexp.test(url);
};

export const Link = ({ to, children, className }: LinkProps) => {
	if (isUrlSameDomain(to)) {
		return (
			<StyledLink className={className} to={to} as={GatsbyLink}>
				{children}
			</StyledLink>
		);
	}
	return (
		<StyledLink className={className} href={to}>
			{children}
		</StyledLink>
	);
};
