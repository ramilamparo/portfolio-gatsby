import React, { ReactElement } from "react";
import styled from "styled-components";
import { SEO } from "../components/utils/SEO";
import { TimeLine } from "../components/TimeLine";
import { AboutMe } from "../components/AboutMe";
import atsLogo from "../assets/images/ATS_logo.png";
import erhsLogo from "../assets/images/ERHS_logo.png";
import sanLoLogo from "../assets/images/SanLo_logo.png";
import p6esLogo from "../assets/images/P6ES_logo.png";

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 5rem auto;
	padding: 0 5rem;
	max-width: 130rem;
	& > * {
		&:not(:last-child) {
			margin-right: 2rem;
		}
	}
`;

export default (): ReactElement => {
	return (
		<>
			<SEO title={"About"} />
			<Content>
				<AboutMe
					title="About Me"
					description={`
				Hello,

				My name is Ramil. Born and raised. Totally human!
				`}
				/>
				<TimeLine
					items={[
						{
							title: "Advance Telematics Solutions",
							timeSpan: "Mar '18 - current",
							subtitle: "Web Developer",
							location: "Dubai, United Arab Emirates",
							description: ["Did some work here and there."],
							logo: {
								src: atsLogo,
								alt: "Advance Telematics Solutions"
							}
						}
					]}
					title="Work"
					icon="work"
				/>
				<TimeLine
					items={[
						{
							title: "Colegio de San Lorenzo",
							timeSpan: "2013 - 2017",
							subtitle: "Bachelor's Degree in Computer Science",
							location: "Quezon City, Philippines",
							logo: {
								src: sanLoLogo,
								alt: "Colegio de San Lorenzo"
							}
						},
						{
							title: "Ernesto Rondon High School",
							timeSpan: "2009 - 2013",
							subtitle: "High School",
							location: "Quezon City, Philippines",
							logo: {
								src: erhsLogo,
								alt: "Ernesto Rondon High School"
							}
						},
						{
							title: "Project 6 Elementary School",
							timeSpan: "2003 - 2009",
							subtitle: "Elementary School",
							location: "Quezon City, Philippines",
							logo: {
								src: p6esLogo,
								alt: "Project 6 Elementary School"
							}
						}
					]}
					title="Education"
					icon="school"
				/>
			</Content>
		</>
	);
};
