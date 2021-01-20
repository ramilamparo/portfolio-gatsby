import React from "react";
import type { ProjectProps } from "./Project";
import { Project } from "./Project";

export interface ProjectListProps {
	projects: ProjectProps[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
	return (
		<>
			{projects.map((props) => (
				<Project key={props.title} {...props} />
			))}
		</>
	);
};
