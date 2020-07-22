import React from "react";
import classNames from "classnames";

export type IconSource = "jam" | "material" | "ionicon";

export interface IconProps {
	/** Size of icon to be inserted in css. */
	className?: string;
	source?: IconSource;
	children: string;
}

export const Icon = ({
	className,
	children,
	source = "material"
}: IconProps) => {
	if (source === "material") {
		return (
			<span className={classNames("material-icons", className)}>{children}</span>
		);
	}
	if (source === "ionicon") {
		return (
			<ion-icon
				className={classNames("ionicon", className)}
				name={children}
			></ion-icon>
		);
	}
	return <span className={classNames("jam", `jam-${children}`, className)} />;
};
