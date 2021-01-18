import React from "react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { useStrapiContactPage } from "../hooks/useStrapiContactPage";
import { Link } from "../presentational/Link";
import { Typography } from "../presentational/Typography";
import { TypograpyIcon } from "../presentational/TypographyIcon";

export const ContactLinks = () => {
	const contact = useStrapiContactPage();
	return (
		<>
			<Typography variant="paragraph">
				{`You can send me an email at `}
				<Link to={`mailto:${contact.email}`}>{contact.email}</Link>
				{` or you can reach out to me at `}
				<Link to={contact.linkedInLink}>
					<TypograpyIcon icon={IoLogoLinkedin} srLabel="LinkedIn" />
				</Link>
				{` or `}
				<Link to={contact.githubLink}>
					<TypograpyIcon icon={IoLogoGithub} srLabel="GitHub" />
				</Link>
				{`. You can also use the form below!`}
			</Typography>
		</>
	);
};
