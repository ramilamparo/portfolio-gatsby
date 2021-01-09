import React from "react";
import styled from "styled-components";
import { Description as BaseDescription } from "../Description";

export interface DescriptionProps {
	children: string;
	title: string;
}

const Container = styled.div`
	height: 80%;
	flex-grow: 1;
	margin: 0 5%;
	font-size: 1.9rem;
	padding-top: 8rem;
`;

const DescriptionText = styled(BaseDescription)``;

const DescriptionHeader = styled.h2`
	margin-bottom: 2rem;
`;

export const Description = ({ children, title }: DescriptionProps) => {
	return (
		<Container>
			<DescriptionHeader>{title}</DescriptionHeader>
			<DescriptionText>{children}</DescriptionText>
		</Container>
	);
};
