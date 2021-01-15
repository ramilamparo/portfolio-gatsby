import React, { useEffect, useRef } from "react";
import { Modal, ModalProps } from "./Modal";
import styled from "styled-components";
import { Button } from "./Button";
import { Typography } from "./Typography";

interface MessageModalProps extends ModalProps {
	title: string;
}

const ModalContentContainer = styled.div`
	width: 30rem;
	min-height: 20rem;
	background-color: #1c1f26;
	padding: 3rem;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

const StyledDismissButton = styled(Button)`
	margin-top: 2rem;
	float: right;
`;

export const MessageModal = ({
	open,
	onDismiss,
	title,
	children
}: MessageModalProps) => {
	const node = useRef(document.createElement("div"));

	useEffect(() => {
		document.body.appendChild(node.current);

		return () => {
			document.body.removeChild(node.current);
		};
	}, [node]);

	return (
		<Modal onDismiss={onDismiss} open={open}>
			<ModalContentContainer>
				<Typography variant="header3" as="h3">
					{title}
				</Typography>
				{children}
				<StyledDismissButton onClick={onDismiss}>OK</StyledDismissButton>
			</ModalContentContainer>
		</Modal>
	);
};
