import type { ReactNode } from "react";
import React from "react";
import styled from "styled-components";
import { Header } from "../containers/NavBar";
import { Helmet } from "./Helmet";
import "./GlobalStyles.css";
import { Footer } from "../presentational/Footer";
export interface BaseLayoutProps {
	children: ReactNode;
}

const Container = styled.div`
	width: 60%;
	margin: 0 auto 0 auto;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: space-between;
	padding: 3rem 0;
`;

export const BaseLayout = ({ children }: BaseLayoutProps) => {
	return (
		<Container>
			<div>
				<Helmet />
				<Header />
				{children}
			</div>
			<Footer />
		</Container>
	);
};
