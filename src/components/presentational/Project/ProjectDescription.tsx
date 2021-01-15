import React, { ComponentType, useCallback } from "react";
import { IoLogoGithub, IoGlobe } from "react-icons/io5";
import { Icon } from "../Icon";
import { Typography } from "../Typography";

export interface ProjectDescriptionProps {
	title: string;
	description: string;
	githubLink?: string | null;
	demoLink?: string | null;
}

export const ProjectDescription = ({
	title,
	description,
	githubLink,
	demoLink
}: ProjectDescriptionProps) => {
	const renderIcon = useCallback(
		(icon: ComponentType, srLabel: string, linkFor?: string | null) => {
			if (linkFor) {
				return <Icon icon={icon} srLabel={srLabel} />;
			}
			return null;
		},
		[]
	);
	return (
		<>
			<Typography variant="header3">{title}</Typography>
			<Typography variant="paragraph">{description}</Typography>
			{renderIcon(IoLogoGithub, "GitHub", githubLink)}
			{renderIcon(IoGlobe, "Demo", demoLink)}
		</>
	);
};
