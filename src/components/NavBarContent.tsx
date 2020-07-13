import React, { FC } from "react";
import styled from "styled-components";
import { NavBar as NavBarBase, NavBarProps } from "./NavBar";

const NavBarContentRoot = styled.div`
	display: flex;
	height: 100vh; /* Fallback for browsers that do not support Custom Properties */
	height: calc(var(--vh, 1vh) * 100); /*Used to hack mobile browser height*/
	@media (max-width: 530px) {
		flex-direction: column;
	}
`;

export const NavBar = styled(NavBarBase)`
	display: flex;
	flex-direction: column;
	@media (max-width: 530px) {
		flex-direction: row;
	}
`;

export const Content = styled.div`
	flex-grow: 1;
`;

export type NavBarContentProps = NavBarProps;

export const NavBarContent: FC<NavBarContentProps> = ({
	children,
	links,
	logo,
	currentPath,
	className
}) => {
	return (
		<NavBarContentRoot className={className}>
			<NavBar logo={logo} links={links} currentPath={currentPath} />
			<Content>{children}</Content>
		</NavBarContentRoot>
	);
};
if (window !== undefined) {
	/**
	 * This hack will fix how mobile browsers displays full page when the browser navbar is displayed.
	 * This will fix scrolling on our website.
	 */
	// Hack mobile browser height.
	let vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	window.document.documentElement.style.setProperty("--vh", `${vh}px`);
	// We listen to the resize event
	window.addEventListener("resize", () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	});
}
