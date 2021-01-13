import React, { ReactNode } from "react";
import styled from "styled-components";
import { Header } from "../containers/NavBar";
import { Helmet } from "./Helmet";
import "./GlobalStyles.css";

export interface BaseLayoutProps {
	children: ReactNode;
}

const Container = styled.div`
	width: 60%;
	margin: 0 auto 0 auto;
`;

export const BaseLayout = ({ children }: BaseLayoutProps) => {
	return (
		<Container>
			<Helmet />
			<Header />
			{children}
		</Container>
	);
};
