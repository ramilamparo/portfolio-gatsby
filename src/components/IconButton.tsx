import React, { ComponentProps } from "react";
import styled from "styled-components";
import { Icon, IconSource } from "./Icon";
import { gray4, cyan } from "../utils/colors";

export type IconButtonProps = {
	/** The label to be displayed when icon is hovered. */
	label: string;
	/** The icon name on material-icons. E.g. "menu", "check_circle" */
	icon: string;
	/** Use "jam-icons" or "material-icons" */
	iconSource?: IconSource;
} & ComponentProps<typeof Button>;

const Content = styled.span``;

export const Button = styled.button`
	text-decoration: none;
	color: ${gray4};
	text-transform: uppercase;
	background: none;
	display: flex;
	align-items: center;
	position: relative;
	cursor: pointer;
	& > * {
		transition: all 0.5s;
	}
	& span:nth-of-type(2) {
		font-size: 2.4em;
	}
	& span:nth-of-type(1) {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 1em;
		font-weight: 700;
		opacity: 0;
	}
	/** Shows label on hover. */
	&:hover span:nth-of-type(1) {
		opacity: 1;
		color: ${cyan};
	}
	/** Hides icon on hover. */
	&:hover span:nth-of-type(2) {
		opacity: 0;
		color: ${cyan};
	}
`;

export const IconButton = ({
	icon,
	label,
	iconSource,
	forwardAs,
	...otherProps
}: IconButtonProps) => {
	return (
		<Button as={forwardAs} {...otherProps}>
			<span className="label">{label}</span>
			<Icon className="icon" source={iconSource}>
				{icon}
			</Icon>
		</Button>
	);
};
