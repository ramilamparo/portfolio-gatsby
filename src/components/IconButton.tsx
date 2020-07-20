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

export const Button = styled.button`
	text-decoration: none;
	color: ${gray4};
	text-transform: uppercase;
	flex-basis: 6rem;
	position: relative;
	background: none;
	display: inline-block;
	& > * {
		transition: all 0.5s;
	}
	& .icon {
		font-size: 2.4rem;
	}
	& .label {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 1rem;
		font-weight: 700;
		opacity: 0;
		backface-visibility: hidden;
	}
	/** Shows label on hover. */
	&:hover .label {
		opacity: 1;
		color: ${cyan};
	}
	/** Hides icon on hover. */
	&:hover .icon {
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
