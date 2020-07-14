import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { cyan, magenta } from "../utils/colors";

export interface JumbotronProps {
	/** Main title to be shown. */
	title: string;
	/** Text below title. */
	subtitle: string;
	/** Link path for title. */
	to: string;
}

const Container = styled.div`
	position: absolute;
	width: 80%;
	max-width: 600px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Title = styled(Link)`
	display: block;
	position: relative;
	font-size: 7rem;
	font-weight: 700;
	/** Removes underline from 'a' tag. */
	text-decoration: none;
	/** Remove 'a' tag visited color. */
	&:visited {
		color: white;
	}
	/** Effect to show underline on title. */
	&:hover::before {
		width: 80%;
	}
	/** First hidden underline. */
	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		width: 0%;
		height: 86%;
		z-index: -1;
		box-shadow: 0px 4px 0px 0px ${cyan};
		transition: width 1s;
	}
	/** Second underline. */
	&::after {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		height: 86%;
		width: 100%;
		z-index: -1;
		box-shadow: 0px 2px 0px 0px ${magenta};
	}
`;

const Subtitle = styled.h2`
	font-size: 2.5rem;
	text-align: right;
	padding-right: 5rem;
`;

export const Jumbotron = ({ title, subtitle, to }: JumbotronProps) => {
	return (
		<Container>
			<Title to={to}>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
		</Container>
	);
};
