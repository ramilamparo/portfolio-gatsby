import React from "react";
import { Field } from "react-form";
import styled, { css } from "styled-components";
import { baseTypographyStyle } from "./Typography";

export interface TextAreaProps
	extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	id: string;
	label: string;
	resize?: boolean;
}

type StyledTextAreaProps = Omit<TextAreaProps, "label">;

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

const StyledTextArea = styled.textarea<StyledTextAreaProps>`
	${baseTypographyStyle}
	${baseInputStyle}
	resize: ${(props) => (props.resize ? "both" : "none")};
	width: 100%;
`;

const StyledContainer = styled.div``;

export const TextArea = ({
	id,
	label,
	className,
	...textAreaProps
}: TextAreaProps) => {
	return (
		<Field<string> defaultValue="" name={id}>
			{({ value, setFieldValue }) => (
				<StyledContainer>
					<StyledLabel htmlFor={id}>{label}</StyledLabel>
					<StyledTextArea
						{...textAreaProps}
						id={id}
						value={value}
						onChange={(e) => setFieldValue(e.target.value)}
					/>
				</StyledContainer>
			)}
		</Field>
	);
};
