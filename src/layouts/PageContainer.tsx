import React, { ReactElement } from "react";
import { PageProps } from "gatsby";
import { BaseLayout } from "./BaseLayout";

export default ({ children }: PageProps): ReactElement => {
	return <BaseLayout>{children}</BaseLayout>;
};
