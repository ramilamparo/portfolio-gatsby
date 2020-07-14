import React, { ReactElement } from "react";
import { BaseLayout } from "../components/utils/BaseLayout";
import { PageProps } from "gatsby";

export default (props: PageProps): ReactElement => {
	return (
		<>
			<BaseLayout currentPath={props.location.pathname}>
				{props.children}
			</BaseLayout>
		</>
	);
};
