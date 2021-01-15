import React from "react";
import { Field } from "react-form";
import styled, { css } from "styled-components";
import { baseTypographyStyle } from "./Typography";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	id: string;
	label: string;
}

export const baseInputStyle = css`
	background-color: #222222;
	border: none;
	outline: none;
	&:focus {
		box-shadow: 0 0 2px #719ece;
	}
`;

const StyledLabel = styled.label`
	${baseTypographyStyle}
`;

const StyledInput = styled.input`
	${baseTypographyStyle}
	${baseInputStyle}
	width: 100%;
`;

const StyledContainer = styled.div``;

export const Input = ({ id, label, className, ...inputProps }: InputProps) => {
	return (
		<Field<string> defaultValue="" name={id}>
			{({ value, setFieldValue }) => (
				<StyledContainer className={className}>
					<StyledLabel htmlFor={id}>{label}</StyledLabel>
					<StyledInput
						{...inputProps}
						id={id}
						value={value}
						onChange={(e) => setFieldValue(e.target.value)}
					/>
				</StyledContainer>
			)}
		</Field>
	);
};
