import React from "react";
import { useStrapiWorkHistories } from "../hooks/useStrapiWorkHistories";
import { useStrapiAboutPage } from "../hooks/useStrapiAboutPage";
import { Section } from "../presentational/Section";
import { Typography } from "../presentational/Typography";
import { WorkHistoryList } from "../presentational/WorkHistory/WorkHistoryList";

export const AboutSection = () => {
	const aboutQuery = useStrapiAboutPage();
	const workHistories = useStrapiWorkHistories();

	return (
		<Section title="About Me" id="about" titleVariant="header2">
			<Typography variant="paragraph">{aboutQuery.aboutMe}</Typography>
			<WorkHistoryList
				workHistories={workHistories.map((workHistory) => ({
					id: workHistory.id,
					companyName: workHistory.companyName,
					description: workHistory.description,
					role: workHistory.role,
					companyLogo:
						workHistory.companyLogo.thumbnail || workHistory.companyLogo.original,
					start: workHistory.start,
					end: workHistory.end || undefined
				}))}
			/>
		</Section>
	);
};
