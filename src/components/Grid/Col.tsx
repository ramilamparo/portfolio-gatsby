import styled, {
	css,
	InterpolationFunction,
	ThemedStyledProps,
	CSSObject,
	Interpolation
} from "styled-components";

/**
 * When true, enable auto sizing for column.
 * When false, hide column on breakpoint.
 * When number, specify the column size on the row. (1 to 12)
 */
type ColBreakpoint = number | boolean;

const DIMENSION_NAMES: DimensionName[] = ["xs", "sm", "md", "lg", "xl"];

const OFFSET_NAMES: OffsetName[] = [
	"xsOffset",
	"smOffset",
	"mdOffset",
	"lgOffset",
	"xlOffset"
];

type DimensionName = "xs" | "sm" | "md" | "lg" | "xl";

type DimensionProps = Record<DimensionName, ColBreakpoint>;

type OffsetName =
	| "xsOffset"
	| "smOffset"
	| "mdOffset"
	| "lgOffset"
	| "xlOffset";

/** Offset the column */
type OffsetProps = Record<OffsetName, number | undefined>;

export enum Breakpoint {
	PHONE_ONLY = "min-width: 599px",
	TABLET_PORTRAIT_UP = "min-width: 600px",
	TABLET_LANDSCAPE_UP = "min-width: 900px",
	DESKTOP_UP = "min-width: 1200px",
	BIG_DESKTOP_UP = "min-width: 1800px"
}

const makeMedia = (breakpoint: Breakpoint) => (
	first:
		| TemplateStringsArray
		| CSSObject
		| InterpolationFunction<ThemedStyledProps<ColProps, {}>>,
	...interpolation: Array<Interpolation<ThemedStyledProps<ColProps, {}>>>
) => css<ColProps>`
	@media (${breakpoint}) {
		${css<ColProps>(first, ...interpolation)}
	}
`;

const makeMarginMedia = (
	breakpoint: Breakpoint,
	offsetCount: number
) => makeMedia(breakpoint)`
	margin-left:${(12 * offsetCount) / 100}
`;

const getDimensionStyle = (breakpoint: ColBreakpoint) => {
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

const getOffsetStyle = (offset: OffsetName, offsetCount: number) => {
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

export interface ColProps extends DimensionProps, OffsetProps {
	/** flex-direction: column-reverse. Default false. */
	reverse?: boolean;

	/** Spacing in the gutter. */
	spacing: number;
}

export const Col = styled.div<ColProps>`
	box-sizing: border-box;
	/** Flex grow, flex shrink, flex basis. */
	flex: 0 0 auto;

	/** TODO: Move this to Row component. */
	padding-right: ${(p) => p.spacing}rem;
	padding-left: ${(p) => p.spacing}rem;

	flex-direction: ${(p) => p.reverse && `column-reverse`};

	${(p) =>
		Object.keys(p)
			.filter<DimensionName>(
				(k: any): k is DimensionName => DIMENSION_NAMES.indexOf(k) >= 0
			)
			.sort((k1, k2) => DIMENSION_NAMES.indexOf(k1) - DIMENSION_NAMES.indexOf(k2))
			.map((k) => getDimensionStyle(p[k]))}

	${(p) =>
		Object.keys(p)
			.filter((k: any): k is OffsetName => OFFSET_NAMES.indexOf(k) >= 0)
			.map((k) => getOffsetStyle(k, p[k] as number))}
`;
