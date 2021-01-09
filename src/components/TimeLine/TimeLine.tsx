import React from "react";
import styled from "styled-components";
import {
	TimeLineItemProps,
	TimeLineItem as TimeLineItemBase
} from "./TimeLineItem";
import { Info } from "../Info";

export interface TimeLineProps {
	items: TimeLineItemProps[];
	title: string;
	icon: string;
	className?: string;
}

const TimeLineItemContainer = styled.div`
	position: relative;
	&::before {
		content: "";
		position: absolute;
		height: 100%;
		width: 7px;
		border-radius: 1000px;
		background-color: #464646;
	}
`;

const TimeLineItem = styled(TimeLineItemBase)`
	&:not(:first-item) {
		margin-top: 5rem;
	}
`;

export const TimeLine = ({ className, items, title, icon }: TimeLineProps) => {
	return (
		<Info className={className} title={title} icon={icon}>
			<TimeLineItemContainer>
				{items.map((item) => (
					<TimeLineItem key={item.title + item.subtitle + item.timeSpan} {...item} />
				))}
			</TimeLineItemContainer>
		</Info>
	);
};
