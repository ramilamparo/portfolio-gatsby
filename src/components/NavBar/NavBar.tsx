import React, { useCallback } from "react";
import styled from "styled-components";
import { NavBarLogo, NavBarLogoProps } from "./NavBarLogo";
import { NavBarLink, NavBarLinkProps } from "./NavBarLink";

export interface NavBarProps {
	/** Logo to be displayed in the nav bar. */
	logo: NavBarLogoProps;
	/** Array of navigable links to be display. */
	links: Array<Omit<NavBarLinkProps, "selected">>;
	/** Current browser path to determine if the a navbar link is highlighted. */
	currentPath: string;
	/** Passed to the root component. */
	className?: string;
}

const Nav = styled.nav`
	background-color: #181818;
`;

const NavBarLinkContainer = styled.div`
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin: auto;
	@media (max-width: 530px) {
		flex-direction: row;
		margin: 0;
		flex-grow: 1;
	}
`;

export const NavBar = ({
	logo,
	links,
	currentPath,
	className
}: NavBarProps) => {
	const isRouteActive = useCallback(
		(to: string) => {
			return currentPath === to;
		},
		[currentPath]
	);

	return (
		<Nav className={className}>
			<NavBarLogo {...logo} />
			<NavBarLinkContainer>
				{links.map((link) => (
					<NavBarLink {...link} selected={isRouteActive(link.to)} />
				))}
			</NavBarLinkContainer>
		</Nav>
	);
};
