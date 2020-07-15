import React from "react";
import styled from "styled-components";
import classNames from "classnames";

export interface IconProps {
	/** Size of icon to be inserted in css. */
	size: string;
	className?: string;
	children: string;
}

const BaseIcon = styled.span<IconProps>`
	font-size: ${(props) => props.size};
`;

export const Icon = ({ size, className, children }: IconProps) => {
	return (
		<BaseIcon size={size} className={classNames("material-icons", className)}>
			{children}
		</BaseIcon>
	);
};
