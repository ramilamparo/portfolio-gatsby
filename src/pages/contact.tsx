import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ContactForm } from "../components/containers/ContactForm";
import { siteKey } from "../config/recaptcha";

export default () => {
	return (
		<>
			<GoogleReCaptchaProvider reCaptchaKey={siteKey}>
				<ContactForm />
			</GoogleReCaptchaProvider>
		</>
	);
};
