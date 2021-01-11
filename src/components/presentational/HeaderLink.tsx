import React from "react";
import styled from "styled-components";
import { Link, LinkProps } from "./Link";

export type HeaderLinkProps = LinkProps;

const StyledHeaderLink = styled(Link)`
	color: gray;
	&:visited {
		color: gray;
	}
`;

export const HeaderLink = (props: HeaderLinkProps) => {
	return <StyledHeaderLink {...props} />;
};
