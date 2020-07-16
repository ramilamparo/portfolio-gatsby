import React, { ReactNode } from "react";
import styled from "styled-components";
import { Icon } from "./Icon";

export interface InfoProps {
	title: string;
	icon: string;
	className?: string;
	children: ReactNode;
}

const Title = styled.h2`
	font-size: 2rem;
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
	/** Icon style. */
	& .material-icons {
		margin-right: 1rem;
		color: #4d4d4d;
	}
`;

export const Info = ({ className, children, title, icon }: InfoProps) => {
	return (
		<div className={className}>
			<Title>
				<Icon size="2rem">{icon}</Icon>
				{title}
			</Title>
			{children}
		</div>
	);
};
