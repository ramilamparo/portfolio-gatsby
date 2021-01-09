import React, { useCallback } from "react";
import styled from "styled-components";
import { Icon } from "../Icon";
import { gray1 } from "../../utils/colors";

export interface TimeLineItemProps {
	className?: string;
	logo: {
		src: string;
		alt: string;
	};
	title: string;
	subtitle?: string;
	timeSpan: string;
	location?: string;
	description?: string[];
}

const Container = styled.div`
	position: relative;
	padding-left: 4rem;
	font-size: 1.7rem;
	display: flex;
	flex-direction: column;

	/** Gives spacing to children. */
	& > * {
		&:not(:first-child) {
			margin-top: 1rem;
		}
	}

	&::before {
		content: "";
		margin-left: -0.7rem;
		top: 2.2rem;
		left: 0;
		position: absolute;
		height: 2.2rem;
		width: 2.2rem;
		border-radius: 1000px;
		background-color: #7e7e7e;
		transition: all 0.2s;
	}

	&:hover::before {
		background-color: white;
	}
`;

const Logo = styled.img`
	height: 6rem;
	/** Make the image not stretch the whole width of the parent. */
	align-self: flex-start;
`;

const Title = styled.h3`
	display: inline;
`;

const TimeSpan = styled.p`
	display: inline-block;
	font-family: lato;
	font-size: 0.9em;
	margin-left: 0.6rem;
`;

const Subtitle = styled.p``;

const Location = styled.p`
	display: inline-flex;
	align-items: center;
	font-size: 0.8em;
	font-family: Lato;
	font-weight: 700;
	margin-left: -0.3em;
	& > .material-icons {
		margin-right: 0.4em;
		color: ${gray1};
	}
`;

const DescriptionListItem = styled.li`
	&::before {
		content: "-";
		margin-right: 1rem;
	}
`;

const DescriptionList = styled.ul`
	list-style-type: none;
`;

export const TimeLineItem = ({
	className,
	logo,
	title,
	subtitle,
	timeSpan,
	location,
	description
}: TimeLineItemProps) => {
	const renderDescriptions = useCallback(() => {
		if (!description || description.length === 0) {
			return null;
		}
		return (
			<DescriptionList>
				{description.map((text) => (
					<DescriptionListItem key={text}>{text}</DescriptionListItem>
				))}
			</DescriptionList>
		);
	}, [description]);
	return (
		<Container className={className}>
			<Logo src={logo.src} alt={logo.alt} />
			<div>
				<Title>{title}</Title>
				<TimeSpan>{`(${timeSpan})`}</TimeSpan>
				{subtitle && <Subtitle>{subtitle}</Subtitle>}
			</div>
			{location && (
				<Location>
					<Icon>location_on</Icon>
					{location}
				</Location>
			)}
			{renderDescriptions()}
		</Container>
	);
};
