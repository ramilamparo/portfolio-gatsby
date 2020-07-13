import React, { ReactElement } from "react";
import { BaseLayout } from "../components/utils/BaseLayout";
import { PageProps } from "gatsby";
import { SEO } from "../components/utils/SEO";

export default (props: PageProps): ReactElement => {
	return (
		<>
			<SEO title={"Full Stack Developer"} />
			<BaseLayout currentPath={props.location.pathname}></BaseLayout>
		</>
	);
};
