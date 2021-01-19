import React, { ComponentType } from "react";
import styled from "styled-components";
import { SrLabel } from "./SrLabel";
import { baseTypographyStyle } from "./Typography";

export interface IconProps {
	srLabel?: string;
	icon: ComponentType<{ className?: string }>;
	className?: string;
}

const StyledIconComponent = styled.span`
	${baseTypographyStyle}
`;

export const Icon = ({ srLabel, className, icon: Component }: IconProps) => {
	return (
		<>
			<StyledIconComponent as={Component} className={className} />
			{srLabel && <SrLabel>{srLabel}</SrLabel>}
		</>
	);
};
