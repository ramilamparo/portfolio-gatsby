import React from "react";
import styled from "styled-components";
import { Link, LinkProps } from "./Link";

export type HeaderLinkProps = LinkProps;

const StyledLink = styled(Link)`
	color: gray;
	&:visited {
		color: gray;
	}
`;

export const HeaderLink = (props: HeaderLinkProps) => {
	return <StyledLink {...props} />;
};
