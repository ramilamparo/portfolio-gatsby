import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStylesComponent = createGlobalStyle`
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	html {
		font-size: 62.5%;
	}

	body {
		box-sizing: border-box;
		padding: 3rem 0 3rem 0;
		background-color:#2f343f;
	}
`;

export const GlobalStyles = () => {
	return <GlobalStylesComponent />;
};
