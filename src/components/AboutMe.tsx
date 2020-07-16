import React from "react";
import styled from "styled-components";
import { Info } from "./Info";
import { Description } from "./Description";

interface AboutMeProps {
	title: string;
	description: string;
}

const Container = styled.div`
	font-size: 1.5rem;
`;

export const AboutMe = ({ title, description }: AboutMeProps) => {
	return (
		<Container>
			<Info title={title} icon="person">
				<Description>{description}</Description>
			</Info>
		</Container>
	);
};
