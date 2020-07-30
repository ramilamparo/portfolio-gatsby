import styled from "styled-components";
import { ReactNode } from "react";
import { DimensionName, getSpacing, makeMedia } from "./utils";

export interface RowProps {
	direction?: "row" | "column" ;
	reverse?: boolean;
	start?: DimensionName;
	center?: DimensionName;
	end?: DimensionName;
	top?: DimensionName;
	middle?: DimensionName;
	bottom?: DimensionName;
	around?: DimensionName;
	between?: DimensionName;
	first?: DimensionName;
	last?: DimensionName;
	children?: ReactNode;
}

export const Row = styled.div<RowProps>`
	box-sizing: border-box;
	display: flex;
	flex: 0 1 auto;
	flex-direction: ${(p) => p.direction || "row"};
	flex-wrap: wrap;
	margin-right: ${(p) => getSpacing(p.theme.spacing)};
	margin-left: ${(p) => getSpacing(p.theme.spacing)};

	&:not(:last-child) {
		margin-bottom: ${(p) => getSpacing(p.theme.spacing * 2)};
	}

	${(p) => p.reverse && `flex-direction: ${p.direction || "row"}-reverse;`}
	${(p) => p.start && makeMedia(p.start)`justify-content: flex-start;`}
	${(p) => p.center && makeMedia(p.center)`justify-content: center;`}
	${(p) => p.end && makeMedia(p.end)`justify-content: flex-end;`}
	${(p) => p.top && makeMedia(p.top)`align-items: flex-start;`}
	${(p) => p.middle && makeMedia(p.middle)`align-items: center;`}
	${(p) => p.bottom && makeMedia(p.bottom)`align-items: flex-end;`}
	${(p) => p.around && makeMedia(p.around)`justify-content: space-around;`}
	${(p) => p.between && makeMedia(p.between)`justify-content: space-between;`}
	${(p) => p.first && makeMedia(p.first)`order: -1;`}
	${(p) => p.last && makeMedia(p.last)`order: 1;`}
`;
