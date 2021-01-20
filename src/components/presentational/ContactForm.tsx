import type { FormEvent } from "react";
import React, { useCallback } from "react";
import { FormProvider } from "react-form";
import styled, { css } from "styled-components";
import { Breakpoints } from "../../utils/styles/breakpoints";
import { Button } from "./Button";
import { Input } from "./Input";
import { TextArea } from "./TextArea";

export interface ContactFormProps {
	values: ContactFormValues;
	onSubmit: (values: ContactFormValues) => void;
	onChange: (values: ContactFormValues) => void;
	isLoading?: boolean;
}

export interface ContactFormValues {
	subject: string;
	replyTo: string;
	body: string;
}

const baseInputStyle = css`
	@media (${Breakpoints.PHONE_ONLY}) {
		&:last-child {
			margin-left: 1.5rem;
		}
		&:first-child {
			margin-right: 1.5rem;
		}
		&:not(:first-child) &:not(:last-child) {
			margin: 1.5rem 0;
		}
	}
`;

const StyledSubjectInput = styled(Input)`
	${baseInputStyle}
`;
const StyledEmailInput = styled(Input)`
	${baseInputStyle}
`;
const StyledBodyTextArea = styled(TextArea)`
	resize: none;
`;
const StyledSubmitButton = styled(Button)`
	float: right;
	margin-top: 1rem;
`;
const StyledForm = styled.form`
	margin-bottom: 1rem;
`;
const StyledInputContainer = styled.div`
	@media (${Breakpoints.PHONE_ONLY}) {
		flex-direction: row;
	}
	display: flex;
	flex-direction: column;
`;

export const ContactForm = ({
	values,
	onChange,
	onSubmit,
	isLoading
}: ContactFormProps) => {
	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			onSubmit(values);
		},
		[values, onSubmit]
	);
	return (
		<FormProvider values={values} onChange={onChange}>
			<StyledForm onSubmit={handleSubmit}>
				<StyledInputContainer>
					<StyledSubjectInput required id="subject" label="Subject" />
					<StyledEmailInput required id="replyTo" type="email" label="Reply To" />
				</StyledInputContainer>
				<StyledBodyTextArea required rows={10} id="body" label="Body" />
				<StyledSubmitButton disabled={isLoading}>Submit</StyledSubmitButton>
			</StyledForm>
		</FormProvider>
	);
};
