import React from "react";
import styled from "styled-components";
import { Typography } from "./Typography";

const StyledTypographyFooter = styled(Typography)`
	margin-top: 15rem;
`;

export const Footer = () => {
	return (
		<StyledTypographyFooter variant="caption">
			Copyright © {new Date().getFullYear()} Ramil Amparo
		</StyledTypographyFooter>
	);
};
