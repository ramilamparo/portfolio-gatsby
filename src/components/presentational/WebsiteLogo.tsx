import React from "react";
import styled from "styled-components";

export interface WebsiteLogoProps {
	className?: string;
}

const StyledImg = styled.img``;

export const WebsiteLogo = ({ className }: WebsiteLogoProps) => {
	return (
		<a className={className} href="/">
			<StyledImg src="/site-logo.svg" />
		</a>
	);
};
