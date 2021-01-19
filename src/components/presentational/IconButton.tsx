import React, { ComponentType } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { SrLabel } from "./SrLabel";

export interface IconButtonProps {
	onClick: () => void;
	icon: ComponentType;
	srLabel: string;
	className?: string;
}

const StyledButton = styled(Button)`
	border-radius: 10000rem;
	width: 5rem;
	height: 5rem;
	min-width: unset;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledIcon = styled.svg`
	font-size: 3rem;
`;

export const IconButton = ({
	onClick,
	icon: Icon,
	srLabel,
	className
}: IconButtonProps) => {
	return (
		<StyledButton className={className} onClick={onClick}>
			<SrLabel>{srLabel}</SrLabel>
			<StyledIcon as={Icon} />
		</StyledButton>
	);
};
