import React from "react";
import { AboutSection } from "../components/containers/AboutSection";
import { ProjectsSection } from "../components/containers/ProjectsSection";
import { TitleSection } from "../components/containers/TitleSection";

export default () => {
	return (
		<>
			<TitleSection />
			<AboutSection />
			<ProjectsSection />
		</>
	);
};
