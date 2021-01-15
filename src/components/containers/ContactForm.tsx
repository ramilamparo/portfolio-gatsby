import React, { useCallback, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useFormState } from "react-form";
import { useStrapiContactPage } from "../hooks/useStrapiContactPage";
import {
	ContactForm as ContactFormPresentational,
	ContactFormValues
} from "../presentational/ContactForm";
import { MessageModal } from "../presentational/MessageModal";
import { Typography } from "../presentational/Typography";
import { SendMailResponse } from "../hooks/useStrapiContactPage";

interface ModalState {
	title: string;
	message: string;
	open: boolean;
}

export const ContactForm = () => {
	const validateCaptcha = useGoogleReCaptcha();
	const [isLoading, setIsLoading] = useState(false);
	const [modalState, setModalState] = useState<ModalState>({
		title: "",
		message: "",
		open: false
	});
	const contact = useStrapiContactPage();
	const { values, setValues } = useFormState<ContactFormValues>({
		values: {
			body: "",
			replyTo: "",
			subject: ""
		}
	});
	const getModalState = useCallback((response: SendMailResponse) => {
		const newModalState: ModalState = {
			title: "",
			message: response.message,
			open: true
		};

		if (response.success) {
			newModalState.title = "Message Sent!";
			newModalState.message = "Thank you! I will respond to you as soon as I can.";
		} else {
			newModalState.title = "Message cannot be sent!";
		}

		return newModalState;
	}, []);
	const handleSubmit = useCallback(async () => {
		setIsLoading(true);
		const token = await validateCaptcha.executeRecaptcha();
		if (token) {
			const response = await contact.sendMail({ ...values, captcha: token });
			const newModalState = getModalState(response);
			setModalState(newModalState);
		}
		setIsLoading(false);
	}, [values, contact]);

	const dismissModal = useCallback(() => {
		setModalState({ ...modalState, open: false });
	}, [modalState]);

	return (
		<>
			<ContactFormPresentational
				isLoading={isLoading}
				values={values}
				onChange={setValues}
				onSubmit={handleSubmit}
			/>
			<MessageModal
				open={modalState.open}
				onDismiss={dismissModal}
				title={modalState.title}
			>
				<Typography variant="paragraph">{modalState.message}</Typography>
			</MessageModal>
		</>
	);
};
