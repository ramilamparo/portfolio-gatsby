import React from "react";
import styled from "styled-components";

export interface SrLabelProps {
	children: string;
}

const StyledScreenReaderLabel = styled.span`
	position: absolute;
	left: -10000px;
	top: auto;
	width: 1px;
	height: 1px;
	overflow: hidden;
`;

export const SrLabel = ({ children }: SrLabelProps) => {
	return (
		<StyledScreenReaderLabel className="sr-only">
			{children}
		</StyledScreenReaderLabel>
	);
};
