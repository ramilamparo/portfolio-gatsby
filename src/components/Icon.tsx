import React from "react";
import styled from "styled-components";
import classNames from "classnames";

export type IconSource = "jam" | "material";

export interface IconProps {
	/** Size of icon to be inserted in css. */
	className?: string;
	source?: IconSource;
	children: string;
}

const IconBase = styled.span`
	display: inline-flex;
	align-items: center;
	font-size: 2.4em;
`;

export const Icon = ({
	className,
	children,
	source = "material"
}: IconProps) => {
	if (source === "material") {
		return (
			<IconBase className={classNames("material-icons", className)}>
				{children}
			</IconBase>
		);
	}
	return (
		<IconBase className={classNames("jam", `jam-${children}`, className)} />
	);
};
