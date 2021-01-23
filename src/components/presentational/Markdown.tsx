import React, { useMemo } from "react";
import marked from "marked";
import styled from "styled-components";
import { baseTypographyStyle, handleMaxLines } from "./Typography";

export interface MarkdownProps {
	children: string;
	className?: string;
	maxLines?: number;
}

const MarkdownContainer = styled.div<Pick<MarkdownProps, "maxLines">>`
	${baseTypographyStyle}
	${handleMaxLines}
`;

export const Markdown = ({ children, className, maxLines }: MarkdownProps) => {
	const childrenParsed = useMemo(() => {
		const parsedMarkdown = marked(children, { sanitize: true });
		return parsedMarkdown;
	}, [children]);

	return (
		<MarkdownContainer
			className={className}
			maxLines={maxLines}
			dangerouslySetInnerHTML={{ __html: childrenParsed }}
		></MarkdownContainer>
	);
};
