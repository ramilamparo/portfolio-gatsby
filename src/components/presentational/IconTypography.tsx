import React from "react";
import styled from "styled-components";
import { Icon, IconProps } from "./Icon";
import { TypographyProps, Typography } from "./Typography";

export interface IconTypographyProps extends TypographyProps, IconProps {}

const StyledTitle = styled(Typography)`
	display: inline-flex;
	align-items: center;
`;

const StyledIcon = styled(Icon)`
	margin-right: 1rem;
`;

export const IconTypography = ({
	icon: Icon,
	children,
	srLabel,
	...typographyProps
}: IconTypographyProps) => {
	return (
		<StyledTitle {...typographyProps}>
			<StyledIcon icon={Icon} srLabel={srLabel} />
			{children}
		</StyledTitle>
	);
};
