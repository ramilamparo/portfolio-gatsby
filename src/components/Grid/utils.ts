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
export type OffsetProps = Record<OffsetName, number | undefined>;

export enum Breakpoint {
	PHONE_ONLY = "min-width: 599px",
	TABLET_PORTRAIT_UP = "min-width: 600px",
	TABLET_LANDSCAPE_UP = "min-width: 900px",
	DESKTOP_UP = "min-width: 1200px",
	BIG_DESKTOP_UP = "min-width: 1800px"
}

export const makeMedia = <P extends Object = {}, T extends Object = {}>(
	breakpoint: Breakpoint
) => (
	first:
		| TemplateStringsArray
		| CSSObject
		| InterpolationFunction<ThemedStyledProps<P, T>>,
	...interpolation: Array<Interpolation<ThemedStyledProps<P, T>>>
) => css<P>`
	@media (${breakpoint}) {
		${css<P>(first, ...interpolation)}
	}
`;

export const makeMarginMedia = (
	breakpoint: Breakpoint,
	offsetCount: number
) => makeMedia(breakpoint)`
	margin-left:${(12 * offsetCount) / 100}
`;

export const getDimensionStyle = (breakpoint: ColBreakpoint) => {
	/** If breakpoint is a number. */
	if (typeof breakpoint === "number") {
		return `
        flex-basis: ${100 * breakpoint}%;
        max-width: ${100 * breakpoint}%;
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
			return makeMarginMedia(Breakpoint.PHONE_ONLY, offsetCount);
		case "mdOffset":
			return makeMarginMedia(Breakpoint.PHONE_ONLY, offsetCount);
		case "lgOffset":
			return makeMarginMedia(Breakpoint.PHONE_ONLY, offsetCount);
		case "xlOffset":
			return makeMarginMedia(Breakpoint.PHONE_ONLY, offsetCount);
	}
};
