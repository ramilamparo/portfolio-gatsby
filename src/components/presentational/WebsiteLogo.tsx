import React from "react";
import styled from "styled-components";
import websiteLogo from "../../assets/images/site-logo.svg";

export interface WebsiteLogoProps {
	className?: string;
}

const StyledImg = styled.img``;

export const WebsiteLogo = ({ className }: WebsiteLogoProps) => {
	return (
		<a className={className} href="/">
			<StyledImg src={websiteLogo} />
		</a>
	);
};
