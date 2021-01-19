import React, { ReactElement } from "react";
import { PageProps } from "gatsby";
import { BaseLayout } from "./BaseLayout";

const PageContainer = ({ children }: PageProps): ReactElement => {
	return <BaseLayout>{children}</BaseLayout>;
};

export default PageContainer;
