import React, { ReactElement } from "react";
import { PageProps } from "gatsby";

export default (props: PageProps): ReactElement => {
	return <>{props.children}</>;
};
