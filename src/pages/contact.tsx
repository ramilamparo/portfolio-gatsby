import React from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ContactForm } from "../components/containers/ContactForm";
import { ContactLinks } from "../components/containers/ContactLinks";
import { siteKey } from "../config/recaptcha";

const PageContact = () => {
	return (
		<>
			<ContactLinks />
			<GoogleReCaptchaProvider reCaptchaKey={siteKey}>
				<ContactForm />
			</GoogleReCaptchaProvider>
		</>
	);
};

export default PageContact;
