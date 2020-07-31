import React, { useCallback, ReactElement } from "react";
import styled from "styled-components";

interface DescriptionProps {
	children: string;
	className?: string;
}

const Paragraph = styled.p<{ extraSpacing: boolean }>`
	margin-bottom: ${({ extraSpacing }) => extraSpacing && "1em"};
`;

export const Description = ({ className, children }: DescriptionProps) => {
	const renderParagraphs = useCallback(() => {
		/** use trim() to remove extra spacings in the beginning and end. */
		const lines = children.trim().split("\n");
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
					<Paragraph
						key={i + paragraph}
						className={className}
						extraSpacing={extraParagraphSpacing}
					>
						{paragraph.trim()}
					</Paragraph>
				);
			}
		}
		return paragraphs;
	}, []);

	return <>{renderParagraphs()}</>;
};
