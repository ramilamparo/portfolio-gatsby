import React from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { Icon } from "../Icon";

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

export const Link = styled(GatsbyLink)<Pick<NavBarLinkProps, "selected">>`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	color: ${({ selected }) => (selected ? "#01fdd9" : "#888")};
	text-transform: uppercase;
	font-weight: 700;
	flex-basis: 6rem;
	position: relative;
	& > * {
		transition: all 0.5s;
	}
	& i {
		font-size: 3rem;
	}
	& .label {
		opacity: 0;
		position: absolute;
		backface-visibility: hidden;
	}
	/** Shows label on hover. */
	&:hover .label {
		opacity: 1;
		color: ${({ selected }) => (selected ? "#01fdd9" : "#fc0252")};
	}
	/** Hides icon on hover. */
	&:hover .icon {
		opacity: 0;
		color: ${({ selected }) => (selected ? "#01fdd9" : "#fc0252")};
	}
`;

export const NavBarLink = ({ icon, label, selected, to }: NavBarLinkProps) => {
	return (
		<Link selected={selected} to={to}>
			<span className="label">{label}</span>
			<Icon className="icon" size="24px">
				{icon}
			</Icon>
		</Link>
	);
};
