import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { IconButton } from "../IconButton";

export interface NavBarLinkProps {
	/** Path of the link. */
	to: string;
	/** The label to be displayed when icon is hovered. */
	label: string;
	/** The icon name on material-icons. E.g. "menu", "check_circle" */
	icon: string;
	/** Highlights the button if true. */
	selected: boolean;
}

export const Link = styled(IconButton)<Pick<NavBarLinkProps, "selected">>`
	color: ${({ selected }) => (selected ? "#01fdd9" : "#888")};
	flex-basis: 6rem;
	/** Shows label on hover. */
	&:hover span:nth-of-type(1) {
		opacity: 1;
		color: ${({ selected }) => (selected ? "#01fdd9" : "#fc0252")};
	}
	/** Hides icon on hover. */
	&:hover span:nth-of-type(2) {
		opacity: 0;
		color: ${({ selected }) => (selected ? "#01fdd9" : "#fc0252")};
	}
`;

export const NavBarLink = ({ icon, label, selected, to }: NavBarLinkProps) => {
	return (
		<Link
			forwardAs={GatsbyLink}
			icon={icon}
			label={label}
			selected={selected}
			to={to}
		/>
	);
};
