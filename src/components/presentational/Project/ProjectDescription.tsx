import type { ComponentType } from "react";
import React, { useCallback } from "react";
import { IoLogoGithub, IoGlobe } from "react-icons/io5";
import styled from "styled-components";
import { Icon } from "../Icon";
import { Link } from "../Link";
import { Markdown } from "../Markdown";
import { Typography } from "../Typography";

export interface ProjectDescriptionProps {
	title: string;
	description: string;
	githubLink?: string | null;
	demoLink?: string | null;
	className?: string;
	slug: string;
}

const StyledLinks = styled.div`
	display: flex;
	align-items: center;
	& > * {
		&:not(:first-child) {
			margin-left: 1rem;
		}
	}
`;

const StyledLink = styled(Link)`
	color: white;
	text-decoration: underline;
`;

const StyledIconLink = styled(Link)`
	display: flex;
`;

const StyledIcon = styled(Icon)`
	font-size: 2rem;
`;

export const ProjectDescription = ({
	title,
	description,
	githubLink,
	demoLink,
	className,
	slug
}: ProjectDescriptionProps) => {
	const renderIcon = useCallback(
		(icon: ComponentType, srLabel: string, linkFor?: string | null) => {
			if (linkFor) {
				return (
					<StyledIconLink to={linkFor}>
						<StyledIcon icon={icon} srLabel={srLabel} />
					</StyledIconLink>
				);
			}
			return null;
		},
		[]
	);
	return (
		<div className={className}>
			<Typography variant="header3">{title}</Typography>
			<Markdown maxLines={3}>{description}</Markdown>
			<StyledLinks>
				{renderIcon(IoLogoGithub, "GitHub", githubLink)}
				{renderIcon(IoGlobe, "Demo", demoLink)}
				<StyledLink to={slug}>Read more...</StyledLink>
			</StyledLinks>
		</div>
	);
};
