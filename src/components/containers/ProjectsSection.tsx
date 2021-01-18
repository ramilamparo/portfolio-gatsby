import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import styled from "styled-components";
import { useStrapiContactPage } from "../hooks/useStrapiContactPage";
import { useStrapiPortfolios } from "../hooks/useStrapiPortfolios";
import { Link } from "../presentational/Link";
import { ProjectList } from "../presentational/Project/ProjectList";
import { Section } from "../presentational/Section";
import { Typography } from "../presentational/Typography";
import { TypograpyIcon } from "../presentational/TypographyIcon";

const StyledTypography = styled(Typography)`
	margin-bottom: 5rem;
`;

export const ProjectsSection = () => {
	const contacts = useStrapiContactPage();
	const projects = useStrapiPortfolios();

	return (
		<Section title="Projects" id="projects" titleVariant="header2">
			<StyledTypography variant="paragraph">
				{`These are some of my projects. You can find most of them on my `}
				<Link to={contacts.githubLink}>
					<TypograpyIcon icon={IoLogoGithub} srLabel="GitHub page" />
				</Link>
				{`.`}
			</StyledTypography>
			<ProjectList
				projects={projects.map((project) => ({
					title: project.title,
					description: project.description,
					thumbnails: project.screenshots.map((ss, index) => ({
						src: ss.thumbnail || ss.original,
						alt: `Screenshot ${index + 1}`
					})),
					githubLink: project.githubLink,
					demoLink: project.demoLink,
					slug: `/portfolios/${project.id}`
				}))}
			/>
		</Section>
	);
};
