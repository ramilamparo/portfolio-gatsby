import React, { ComponentType } from "react";
import styled from "styled-components";
import { baseTypographyStyle } from "./Typography";

export interface IconProps {
	srLabel: string;
	icon: ComponentType<{ className?: string }>;
	className?: string;
}

const StyledScreenReaderLabel = styled.span`
	position: absolute;
	left: -10000px;
	top: auto;
	width: 1px;
	height: 1px;
	overflow: hidden;
`;

const StyledIconComponent = styled.span`
	${baseTypographyStyle}
`;

export const Icon = ({ srLabel, className, icon: Component }: IconProps) => {
	return (
		<>
			<StyledIconComponent as={Component} className={className} />
			<StyledScreenReaderLabel className="sr-only">
				{srLabel}
			</StyledScreenReaderLabel>
		</>
	);
};
