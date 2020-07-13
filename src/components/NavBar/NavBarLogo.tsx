import React, { ReactElement } from "react";
import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { RockOnHover } from "../utils/RockOnHover";

export interface NavBarLogoProps {
	src: string;
	alt: string;
}

const Img = styled.img`
	height: 4rem;
	width: 4rem;
	margin: 1rem;
	outline: 1px solid transparent;
`;

const Link = styled(GatsbyLink)`
	height: 6rem;
	width: 6rem;
	background-color: #070707;
`;

export const NavBarLogo = ({ src, alt }: NavBarLogoProps): ReactElement => {
	return (
		<Link to="/">
			<RockOnHover>
				<Img src={src} alt={alt} />
			</RockOnHover>
		</Link>
	);
};
