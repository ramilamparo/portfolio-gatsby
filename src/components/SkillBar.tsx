import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { gray2, cyan, magenta, gray3 } from "../utils/colors";
import { boxShadow1 } from "../utils/mixins";
import { Icon } from "./Icon";

export interface SkillBarProps {
	title: string;
	score: number;
	description: string;
	logo: string;
}

const stripeAnimation = keyframes`
	to {
		background-position: 20rem 0;
	}
`;

const Bar = styled.div`
	height: 2rem;
	width: 100%;
	background-color: ${gray3};
	border-radius: 100rem;
`;

const FillBar = styled.div<{ score: number }>`
	height: 100%;
	width: ${({ score }) => `${score * 10}%`};
	background-image: linear-gradient(90deg, ${magenta}, ${cyan} 90%);
	border-radius: 100rem;
	position: relative;

	/** Stripes. */
	&::before {
		content: "";
		position: absolute;
		border-radius: 100rem;
		height: 100%;
		width: 100%;
		background-size: 10rem 100%;
		background-image: linear-gradient(
			130deg,
			transparent,
			transparent 34%,
			white 35%,
			white 60%,
			transparent 61%
		);
		mask: linear-gradient(rgba(0, 0, 0, 0.6), transparent);
		animation: ${stripeAnimation} 4s linear infinite;
	}
`;

const Container = styled.div`
	position: relative;
	width: 40rem;
	padding: 3rem;
	background-color: ${gray2};
	border-radius: 1rem;
	${boxShadow1}
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > * {
		&:not(:last-child) {
			margin-right: 1rem;
		}
	}
	margin-bottom: 1rem;
`;

const Logo = styled.img`
	width: 4rem;
	display: inline-block;
`;

const Title = styled.h2`
	display: inline;
	font-size: 2.5rem;
`;

const ExpandButton = styled.button<{ open: boolean }>`
	border-radius: 100rem;
	width: 4rem;
	height: 4rem;
	background-color: gray;
	cursor: pointer;
	transition: transform 100ms linear;

	/** Invert button on open or close. */
	transform: rotate(${({ open }) => (open ? 180 : 0)}deg);

	/** Set font size of the button icon. */
	& > .material-icons {
		font-size: 4rem;
	}
`;

const Score = styled.h3`
	font-size: 1.5rem;
	font-family: Lato;
	margin-top: 0.5rem;
	text-align: right;
`;

const Description = styled.div`
	font-size: 2rem;
	background-color: ${gray3};
	height: 20rem;
	overflow-y: auto;
	padding: 1rem;
`;

const DescriptionContainer = styled.div<{ open: boolean }>`
	overflow: hidden;
	height: ${({ open }) => (open ? 20 : 0)}rem;
	margin-top: ${({ open }) => (open ? 1 : 0)}rem;
	transition: all 200ms linear;
`;

export const SkillBar = ({
	logo,
	description,
	title,
	score
}: SkillBarProps) => {
	const [barEl, setBarEl] = useState<HTMLDivElement | null>(null);
	const [barWidth, setBarWidth] = useState<number | null>(null);
	const [descriptionExpanded, expandDescription] = useState<boolean>(false);

	useEffect(() => {
		/**
		 * We only need to run the code below when
		 * barWidth is still null to avoid multiple
		 * event listeners in the window.
		 */
		if (!barWidth) {
			window.addEventListener("resize", () => {
				if (barEl) {
					setBarWidth(barEl.clientWidth);
				}
			});
		}
	}, [barEl]);

	return (
		<Container>
			<Header>
				<Logo src={logo} />
				<Title>{title}</Title>
				<ExpandButton
					onClick={() => expandDescription(!descriptionExpanded)}
					open={descriptionExpanded}
				>
					<Icon>expand_more</Icon>
				</ExpandButton>
			</Header>
			<Bar
				ref={(el) => {
					if (el) {
						setBarEl(el);
						setBarWidth(el.clientWidth);
					}
				}}
			>
				<FillBar
					score={score}
					// Use inline style since barWidth can change a lot,
					// which can generate hundreds of classes if used
					// in styled-components.
					style={{
						backgroundSize: `${barWidth || 0}px auto`
					}}
				/>
			</Bar>
			<Score>{score}/10</Score>
			<DescriptionContainer open={descriptionExpanded}>
				<Description>{description}</Description>
			</DescriptionContainer>
		</Container>
	);
};
