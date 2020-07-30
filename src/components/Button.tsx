import styled, { keyframes } from "styled-components";
import { gray2, cyan } from "../utils/colors";

export const Button = styled.button`
	padding: 1rem 2rem;
	font-weight: 900;
	color: white;
	background-image: linear-gradient(45deg, ${cyan} 44%, ${gray2} 44%);
	background-position: 50% 50%;
	background-size: 600% 600%;
	transition: all 200ms linear;

	&:not(:disabled) {
		&:hover,
		&:active,
		&:focus {
			background-position: 0% 0%;
			color: black;
			transform: scale(1.1);
		}
	}

	&:disabled {
		color: gray;
		background-position: 100% 100%;
	}
`;
