import React, { useCallback, ReactElement } from "react";
import styled from "styled-components";
import { Info } from "./Info";

interface AboutMeProps {
	title: string;
	description: string;
}

const Paragraph = styled.p<{ extraSpacing: boolean }>`
	margin-bottom: ${({ extraSpacing }) => extraSpacing && "1em"};
`;

const Container = styled.div`
	font-size: 1.5rem;
`;

export const AboutMe = ({ title, description }: AboutMeProps) => {
	const renderParagraphs = useCallback(() => {
		/** use trim() to remove extra spacings in the beginning and end. */
		const lines = description.trim().split("\n");
		const paragraphs: ReactElement[] = [];

		for (let i = 0; i < lines.length; i++) {
			const paragraph = lines[i];
			const next: string | undefined = lines[i + 1];
			let shouldPushParagraph: boolean = false;
			let extraParagraphSpacing: boolean = false;
			/**
			 * Push non-empty lines to paragraphs, and not allow consecutive
			 * empty-lines.
			 */
			if (paragraph !== "") {
				shouldPushParagraph = true;
				if (next === "") {
					extraParagraphSpacing = true;
				}
			}
			if (shouldPushParagraph) {
				paragraphs.push(
					<Paragraph key={i + paragraph} extraSpacing={extraParagraphSpacing}>
						{paragraph.trim()}
					</Paragraph>
				);
			}
		}
		return paragraphs;
	}, []);

	return (
		<Container>
			<Info title={title} icon="person">
				{renderParagraphs()}
			</Info>
		</Container>
	);
};
