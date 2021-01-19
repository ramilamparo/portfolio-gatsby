import React from "react";
import styled from "styled-components";
import { NavBar, NavBarProps } from "./NavBar";
import { WebsiteLogo } from "./WebsiteLogo";

export type HeaderProps = NavBarProps;

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10rem;
`;

export const Header = ({ links }: HeaderProps) => {
	return (
		<StyledDiv>
			<WebsiteLogo />
			<NavBar links={links} />
		</StyledDiv>
	);
};
