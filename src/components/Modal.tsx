import React, { ReactNode, useRef } from "react";
import { BodyPortal } from "./BodyPortal";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export interface ModalProps {
	children: ReactNode;
	open: boolean;
	onClose: () => void;
}

const Container = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.8);
	z-index: 100;
`;

export const Modal = ({ children, open, onClose }: ModalProps) => {
	const uniqueId = useRef<string>(uuidv4());
	if (!open) {
		return null;
	}
	return (
		<BodyPortal>
			<Container
				id={uniqueId.current}
				onClick={(e) => {
					const id: string | undefined = (e.target as any).id;
					if (id === uniqueId.current) {
						onClose();
					}
				}}
			>
				{children}
			</Container>
		</BodyPortal>
	);
};
