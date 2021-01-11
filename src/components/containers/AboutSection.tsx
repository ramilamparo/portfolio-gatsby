import React from "react";
import { useStrapiAboutPage } from "../hooks/useStrapiAboutPage";
import { Section } from "../presentational/Section";
import { Typography } from "../presentational/Typography";

export const AboutSection = () => {
	const aboutQuery = useStrapiAboutPage();

	return (
		<Section title="About Me" id="about" titleVariant="header2">
			<Typography variant="paragraph">{aboutQuery.aboutMe}</Typography>
		</Section>
	);
};
