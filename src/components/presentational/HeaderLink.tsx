import React from "react";
import styled from "styled-components";
import type { LinkProps } from "./Link";
import { Link } from "./Link";

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
