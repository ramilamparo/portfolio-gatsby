import styled from "styled-components";
import { gray2, cyan } from "../utils/colors";

export const Input = styled.input`
	background-color: ${gray2};
	border-bottom: 1px solid ${cyan};
	padding: 1.2rem;
	color: white;
	font-family: Roboto;
	position: relative;
	transition: all 100ms linear;
	box-shadow: none;
	outline: none;

	&::placeholder {
		text-transform: uppercase;
		font-weight: 700;
		color: white;
	}

	&:focus {
		&::placeholder {
			text-transform: uppercase;
			font-family: Roboto;
			opacity: 0;
		}
	}

	&:focus {
		border-right: 1px solid ${cyan};
	}

	&:not(:placeholder-shown) {
		&:invalid {
			color: red;
			outline: none;
			border-bottom: 1px solid red;
		}
	}
`;
