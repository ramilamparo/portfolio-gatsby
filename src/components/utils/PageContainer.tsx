import type { ReactElement } from "react";
import React from "react";
import type { PageProps } from "gatsby";
import { BaseLayout } from "./BaseLayout";

const PageContainer = ({ children }: PageProps): ReactElement => {
	return <BaseLayout>{children}</BaseLayout>;
};

export default PageContainer;
