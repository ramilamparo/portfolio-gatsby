import React from "react";
import type { IconProps } from "./Icon";
import { Icon } from "./Icon";
import { Link } from "./Link";

export interface IconLinkProps extends IconProps {
	to: string;
}

export const IconLink = ({ to, icon, className, srLabel }: IconLinkProps) => {
	return (
		<Link to={to} className={className}>
			<Icon icon={icon} srLabel={srLabel} />
		</Link>
	);
};
