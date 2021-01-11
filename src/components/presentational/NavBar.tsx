import React, { useMemo } from "react";
import { HeaderLink } from "./HeaderLink";

export interface LinkItem {
	to: string;
	label: string;
}

export interface NavBarProps {
	links: Array<LinkItem>;
}

export const NavBar = ({ links }: NavBarProps) => {
	const headerLinks = useMemo(() => {
		return links.map(({ to, label }) => (
			<HeaderLink key={to + label} to={to}>
				{label}
			</HeaderLink>
		));
	}, [links]);

	return <nav>{headerLinks}</nav>;
};
