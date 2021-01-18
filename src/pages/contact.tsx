import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ContactForm } from "../components/containers/ContactForm";
import { ContactLinks } from "../components/containers/ContactLinks";
import { siteKey } from "../config/recaptcha";

export default () => {
	return (
		<>
			<ContactLinks />
			<GoogleReCaptchaProvider reCaptchaKey={siteKey}>
				<ContactForm />
			</GoogleReCaptchaProvider>
		</>
	);
};
