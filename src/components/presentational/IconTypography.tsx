import React, { ComponentType } from "react";
import styled from "styled-components";
import { TypographyProps, Typography } from "./Typography";

export interface IconTypographyProps extends TypographyProps {
	icon: ComponentType;
}

const StyledTitle = styled(Typography)`
	display: inline-flex;
	align-items: center;
`;

const StyledIcon = styled.span`
	margin-right: 1rem;
`;

export const IconTypography = ({
	icon: Icon,
	children,
	...typographyProps
}: IconTypographyProps) => {
	return (
		<StyledTitle {...typographyProps}>
			<StyledIcon as={Icon} />
			{children}
		</StyledTitle>
	);
};
