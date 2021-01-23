import type { ReactNode } from "react";
import React from "react";
import styled from "styled-components";
import { Header } from "../containers/NavBar";
import { Helmet } from "./Helmet";
import "./GlobalStyles.css";
import { Footer } from "../presentational/Footer";
import { Breakpoints } from "../../utils/styles/breakpoints";
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
	@media (${Breakpoints.PHONE_ONLY}) {
		width: 100%;
		padding: 2rem;
	}
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
