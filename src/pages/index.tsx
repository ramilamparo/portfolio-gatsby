import React, { ReactElement } from "react";
import { SEO } from "../components/utils/SEO";
import { Jumbotron } from "../components/Jumbotron";

export default (): ReactElement => {
	return (
		<>
			<SEO title={"Full Stack Developer"} />
			<Jumbotron
				title="Ramil Amparo"
				subtitle="is a Dubai based JavaScript developer."
				to="/about"
			/>
		</>
	);
};
