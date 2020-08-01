import React from "react";
import styled from "styled-components";
import { Description as BaseDescription } from "../Description";

export interface DescriptionProps {
	children: string;
}

const DescriptionText = styled(BaseDescription)``;

export const Description = ({ children }: DescriptionProps) => {
	return <DescriptionText>{children}</DescriptionText>;
};
