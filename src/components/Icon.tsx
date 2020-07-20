import React from "react";
import styled from "styled-components";
import classNames from "classnames";

export type IconSource = "jam" | "material";

export interface IconProps {
	/** Size of icon to be inserted in css. */
	size?: string;
	className?: string;
	source?: IconSource;
	children: string;
}

const BaseIcon = styled.span<Omit<IconProps, "children">>`
	font-size: ${(props) => props.size};
`;

export const Icon = ({
	size,
	className,
	children,
	source = "material"
}: IconProps) => {
	if (source === "material") {
		return (
			<BaseIcon size={size} className={classNames("material-icons", className)}>
				{children}
			</BaseIcon>
		);
	}
	return (
		<BaseIcon
			size={size}
			className={classNames("jam", `jam-${children}`, className)}
		/>
	);
};
