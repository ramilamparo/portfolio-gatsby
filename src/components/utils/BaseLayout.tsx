import React, { ReactNode } from "react";
import { NavBar } from "../containers/NavBar";
import { Helmet } from "./Helmet";
import { GlobalStyles } from "./GlobalStyles";

export interface BaseLayoutProps {
	children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
	return (
		<>
			<Helmet />
			<NavBar />
			{children}
			<GlobalStyles />
		</>
	);
};
