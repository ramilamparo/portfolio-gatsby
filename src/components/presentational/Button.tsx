import React from "react";
import styled from "styled-components";
import { baseInputStyle } from "./Input";
import { baseTypographyStyle } from "./Typography";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
	${baseTypographyStyle}
	${baseInputStyle}
	padding: 0.5rem 1rem;
	text-transform: uppercase;
	min-width: 6rem;
	&:hover {
		background-color: #383c4a;
	}
	&:disabled {
		opacity: 0.2;
	}
`;

export const Button = (props: ButtonProps) => {
	return <StyledButton {...props} />;
};
