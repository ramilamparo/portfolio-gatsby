import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GridOptions } from "./utils";

interface GridProps extends Partial<GridProps> {
	children: ReactNode;
}

const defaultOptions: GridOptions = {
	spacing: 1
};

export const Grid = ({ children, ...gridOptions }: GridProps) => {
	return (
		<ThemeProvider theme={{ ...defaultOptions, ...gridOptions }}>
			{children}
		</ThemeProvider>
	);
};
