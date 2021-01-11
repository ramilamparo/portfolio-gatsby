import React, { useMemo } from "react";
import styled from "styled-components";
import { HeaderLink } from "./HeaderLink";

export interface LinkItem {
	to: string;
	label: string;
}

export interface NavBarProps {
	links: Array<LinkItem>;
}

const StyledHeaderLink = styled(HeaderLink)`
	padding: 0 0.5rem 0 0.5rem;
`;

export const NavBar = ({ links }: NavBarProps) => {
	const headerLinks = useMemo(() => {
		return links.map(({ to, label }) => (
			<StyledHeaderLink key={to + label} to={to}>
				{label}
			</StyledHeaderLink>
		));
	}, [links]);

	return <nav>{headerLinks}</nav>;
};
