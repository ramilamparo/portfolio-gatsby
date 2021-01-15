import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export interface ModalProps {
	open: boolean;
	onDismiss: () => void;
	children: ReactNode;
}

const StyledModal = styled.div`
	display: relative;
	background-color: rgba(255, 255, 255, 0.5);
	position: fixed;
	padding: 0;
	margin: 0;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export const Modal = ({ open, onDismiss, children }: ModalProps) => {
	const node = useRef(document.createElement("div"));
	const uniqueId = useRef(uuidv4());

	useEffect(() => {
		document.body.appendChild(node.current);

		return () => {
			document.body.removeChild(node.current);
		};
	}, [node]);

	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			const targetId = (e.target as any).id;

			if (targetId && targetId === uniqueId.current) {
				onDismiss();
			}
		},
		[uniqueId.current]
	);

	const getChildren = useCallback(() => {
		if (!open) {
			return null;
		}
		return (
			<StyledModal id={uniqueId.current} onClick={handleClick}>
				{children}
			</StyledModal>
		);
	}, [open, onDismiss, children]);

	return createPortal(getChildren(), node.current);
};
