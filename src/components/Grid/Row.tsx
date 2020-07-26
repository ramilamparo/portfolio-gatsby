import styled from "styled-components";
import { ReactNode } from "react";
import { DimensionName, getSpacing, GridOptions } from "./utils";

export interface RowProps {
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

export const Row = styled.div<RowProps & GridOptions>`
	box-sizing: border-box;
	display: flex;
	flex: 0 1 auto;
	flex-direction: row;
	flex-wrap: wrap;
	margin-right: ${(p) => getSpacing(p.spacing)};
	margin-left: ${(p) => getSpacing(p.spacing)};

	${(p) => p.reverse && `flex-direction: reverse;`}
	${(p) => p.start && `justify-content: flex-start;`}
	${(p) => p.center && `justify-content: center;`}
	${(p) => p.end && `justify-content: flex-end;`}
	${(p) => p.top && `align-items: flex-start;`}
	${(p) => p.middle && `align-items: center;`}
	${(p) => p.bottom && `align-items: flex-end;`}
	${(p) => p.around && `justify-content: space-around;`}
	${(p) => p.between && `justify-content: space-between;`}
	${(p) => p.first && `order: -1;`}
	${(p) => p.last && `order: 1;`}
`;
