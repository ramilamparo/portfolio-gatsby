import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GridOptions } from "./utils";

export interface GridProps extends Partial<GridOptions> {
	children: ReactNode;
}

const defaultOptions: GridOptions = {
	spacing: 1,
	gridSize: 12
};

export const Grid = ({ children, ...gridOptions }: GridProps) => {
	return (
		<ThemeProvider theme={{ ...defaultOptions, ...gridOptions }}>
			{children}
		</ThemeProvider>
	);
};
