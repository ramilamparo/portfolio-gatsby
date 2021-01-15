import React from "react";
import { Project, ProjectProps } from "./Project";

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
