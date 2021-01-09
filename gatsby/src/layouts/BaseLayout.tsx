import React, { ReactNode } from "react";
import { Header } from "../component/Header";
import { GlobalStyles } from "./GlobalStyles";

export interface BaseLayoutProps {
	children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps) => {
	return (
		<>
			<Header />
			{children}
			<GlobalStyles />
		</>
	);
};
