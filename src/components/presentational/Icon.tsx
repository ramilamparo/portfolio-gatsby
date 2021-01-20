import type { ComponentType } from "react";
import React from "react";
import styled from "styled-components";
import classNames from "classnames";
import { SrLabel } from "./SrLabel";
import { baseTypographyStyle } from "./Typography";

export interface IconProps {
	srLabel: string;
	icon: ComponentType<{ className?: string }>;
	className?: string;
}

const StyledIconComponent = styled.span`
	${baseTypographyStyle}
`;

export const Icon = ({ srLabel, className, icon: Component }: IconProps) => {
	return (
		<>
			<StyledIconComponent
				as={Component}
				className={classNames("icon", className)}
			/>
			{srLabel && <SrLabel>{srLabel}</SrLabel>}
		</>
	);
};
