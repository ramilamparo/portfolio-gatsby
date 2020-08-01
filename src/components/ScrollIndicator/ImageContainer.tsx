import React from "react";
import styled from "styled-components";

export interface ImageContainerProps {
	images: string[];
}

const Container = styled.div`
	width: 500px;
	height: 500px;
	background-color: red;
`;

const Image = styled.div``;

export const ImageContainer = ({}: ImageContainerProps) => {
	return <Container />;
};
