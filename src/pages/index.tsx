import React from "react";
import { AboutSection } from "../components/containers/AboutSection";
import { ProjectsSection } from "../components/containers/ProjectsSection";
import { TitleSection } from "../components/containers/TitleSection";

const PageHome = () => {
	return (
		<>
			<TitleSection />
			<AboutSection />
			<ProjectsSection />
		</>
	);
};

export default PageHome;
