import styled from "styled-components";
import {
	DimensionName,
	DimensionProps,
	OffsetProps,
	OffsetName,
	OFFSET_NAMES,
	DIMENSION_NAMES,
	getOffsetStyle,
	getDimensionStyle,
	ColBreakpoint
} from "./utils";

export interface ColProps
	extends Partial<DimensionProps>,
		Partial<OffsetProps> {
	/** flex-direction: column-reverse. Default false. */
	reverse?: boolean;
	children?: any;
}

export const Col = styled.div<ColProps>`
	box-sizing: border-box;
	/** Flex grow, flex shrink, flex basis. */
	flex: 0 0 auto;

	/** TODO: Move this to Row component. */
	padding-right: ${(p) => p.theme.spacing}rem;
	padding-left: ${(p) => p.theme.spacing}rem;

	flex-direction: ${(p) => p.reverse && `column-reverse`};

	${(p) =>
		Object.keys(p)
			.filter<DimensionName>(
				(k: any): k is DimensionName => DIMENSION_NAMES.indexOf(k) >= 0
			)
			.sort((k1, k2) => DIMENSION_NAMES.indexOf(k1) - DIMENSION_NAMES.indexOf(k2))
			.map((k) => getDimensionStyle(p[k] as ColBreakpoint))}

	${(p) =>
		Object.keys(p)
			.filter((k: any): k is OffsetName => OFFSET_NAMES.indexOf(k) >= 0)
			.map((k) => getOffsetStyle(k, p[k] as number))}
`;
