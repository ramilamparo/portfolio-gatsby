import {
	css,
	InterpolationFunction,
	ThemedStyledProps,
	CSSObject,
	Interpolation
} from "styled-components";

export interface GridOptions {
	/** Gutter spacing. */
	spacing: number;
	/** Number of columns in a grid. */
	gridSize: number;
}

/**
 * When true, enable auto sizing for column.
 * When false, hide column on breakpoint.
 * When number, specify the column size on the row. (1 to 12)
 */
export type ColBreakpoint = number | boolean;

export const DIMENSION_NAMES: DimensionName[] = ["xs", "sm", "md", "lg", "xl"];

export const OFFSET_NAMES: OffsetName[] = [
	"xsOffset",
	"smOffset",
	"mdOffset",
	"lgOffset",
	"xlOffset"
];

export type DimensionName = "xs" | "sm" | "md" | "lg" | "xl";

export type DimensionProps = Record<DimensionName, ColBreakpoint>;

export type OffsetName =
	| "xsOffset"
	| "smOffset"
	| "mdOffset"
	| "lgOffset"
	| "xlOffset";

/** Offset the column */
export type OffsetProps = Record<OffsetName, number>;

export enum Breakpoint {
	PHONE_ONLY = "min-width: 599px",
	TABLET_PORTRAIT_UP = "min-width: 600px",
	TABLET_LANDSCAPE_UP = "min-width: 900px",
	DESKTOP_UP = "min-width: 1200px",
	BIG_DESKTOP_UP = "min-width: 1800px"
}

export type FlexDirectionValue =
	| "row"
	| "column"
	| "row-reverse"
	| "column-reverse";

/** @param direction used for flex-direction.
 * 	@param breakpoint if provided, the flex-direction will
 * 	be active on the selected breakpoint.
 */
export const getDirectionStyle = (
	direction: FlexDirectionValue,
	breakpoint?: DimensionName
) => {
	if (breakpoint) {
		return makeMedia(breakpoint)`
			flex-direction: ${direction}
		`;
	}
	return `
		flex-direction: ${direction};
	`;
};

export const getBreakpointFromDimension = (
	dimension: DimensionName
): Breakpoint => {
	switch (dimension) {
		case "xs":
			return Breakpoint.PHONE_ONLY;
		case "sm":
			return Breakpoint.TABLET_PORTRAIT_UP;
		case "md":
			return Breakpoint.TABLET_LANDSCAPE_UP;
		case "lg":
			return Breakpoint.DESKTOP_UP;
		case "xl":
			return Breakpoint.BIG_DESKTOP_UP;
		default:
			throw Error(`Unknown dimension ${dimension}`);
	}
};

export const makeMedia = <P extends Object = {}, T extends Object = {}>(
	breakpoint: Breakpoint | DimensionName
) => (
	first:
		| TemplateStringsArray
		| CSSObject
		| InterpolationFunction<ThemedStyledProps<P, T>>,
	...interpolation: Array<Interpolation<ThemedStyledProps<P, T>>>
) => {
	let breakpointSize = breakpoint;
	if (DIMENSION_NAMES.includes(breakpointSize as DimensionName)) {
		breakpointSize = getBreakpointFromDimension(breakpointSize as DimensionName);
	}
	return css<P>`
		@media (${breakpointSize}) {
			${css<P>(first, ...interpolation)}
		}
	`;
};
export const makeMarginMedia = (
	breakpoint: Breakpoint,
	offsetCount: number
) => makeMedia<{}, GridOptions>(breakpoint)`
	margin-left:${(p) => (100 / p.theme.gridSize) * offsetCount}
`;

export const getDimensionStyle = (breakpoint: ColBreakpoint) => {
	/** If breakpoint is a number. */
	if (typeof breakpoint === "number") {
		return css`
			flex-basis: ${(p) => (100 / p.theme.gridSize) * breakpoint}%;
			max-width: ${(p) => (100 / p.theme.gridSize) * breakpoint}%;
			display: block;
		`;
	}
	/** If breakpoint is a boolean. */
	/** If true */
	if (breakpoint) {
		return `
          flex-grow: 1;
          flex-basis: 0;
          max-width: 100%;
          display: block;
        `;
	}
	/** If false. */
	return "display: none;";
};

export const getSpacing = (number: number = 1) => {
	return `${number}rem`;
};

export const getOffsetStyle = (offset: OffsetName, offsetCount: number) => {
	switch (offset) {
		case "xsOffset":
			return makeMarginMedia(Breakpoint.PHONE_ONLY, offsetCount);
		case "smOffset":
			return makeMarginMedia(Breakpoint.TABLET_PORTRAIT_UP, offsetCount);
		case "mdOffset":
			return makeMarginMedia(Breakpoint.TABLET_PORTRAIT_UP, offsetCount);
		case "lgOffset":
			return makeMarginMedia(Breakpoint.DESKTOP_UP, offsetCount);
		case "xlOffset":
			return makeMarginMedia(Breakpoint.BIG_DESKTOP_UP, offsetCount);
	}
};
