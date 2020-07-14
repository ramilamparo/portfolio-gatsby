import React, { ReactElement } from "react";
import { BaseLayout } from "../components/utils/BaseLayout";
import { PageProps } from "gatsby";
import { SEO } from "../components/utils/SEO";
import { Jumbotron } from "../components/Jumbotron";

export default (props: PageProps): ReactElement => {
	return (
		<>
			<SEO title={"Full Stack Developer"} />
			<BaseLayout currentPath={props.location.pathname}>
				<Jumbotron
					title="Ramil Amparo"
					subtitle="is a Dubai based JavaScript developer."
					to="/about"
				/>
			</BaseLayout>
		</>
	);
};
