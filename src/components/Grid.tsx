import styled, {
	css,
	FlattenInterpolation,
	ThemedStyledProps
} from "styled-components";
import { Breakpoint } from "../utils/breakpoints";

export interface GridProps {
	container?: boolean;
	spacing?: number;

	xs?: number;
	sm?: number;
	md?: number;
	lg?: number;
	xl?: number;
}

const GRID_SIZE_UPPER_LIMIT = 12;

type BreakpointSizes = keyof Pick<GridProps, "xs" | "sm" | "md" | "lg" | "xl">;

const calculateWidthPerc = (width: number) => {
	return (width / GRID_SIZE_UPPER_LIMIT) * 100;
};

const createMediaQuery = (
	breakpoint: Breakpoint,
	size: BreakpointSizes
): FlattenInterpolation<ThemedStyledProps<GridProps, any>> => {
	return css<GridProps>`
		@media (${breakpoint}) {
			${(props) => {
				const sizeProp = props[size];
				if (sizeProp) {
					const width = `${calculateWidthPerc(sizeProp)}%`;
					return css`
						width: ${width};
						flex-basis: ${width};
					`;
				}
			}}
		}
	`;
};

const baseStyles = css<GridProps>`
	${({ container, spacing = 0 }) => {
		if (container) {
			return css`
				display: flex;
				flex-wrap: wrap;
				margin: -${spacing}rem;

				& > * {
					padding: ${spacing}rem;
				}
			`;
		}
	}}
`;

const xs = createMediaQuery(Breakpoint.PHONE_ONLY, "xs");
const sm = createMediaQuery(Breakpoint.TABLET_PORTRAIT_UP, "sm");
const md = createMediaQuery(Breakpoint.TABLET_LANDSCAPE_UP, "md");
const lg = createMediaQuery(Breakpoint.DESKTOP_UP, "lg");
const xl = createMediaQuery(Breakpoint.BIG_DESKTOP_UP, "xl");

export const Grid = styled.div<GridProps>`
	${baseStyles}

	${xs}
	${sm}
	${md}
	${lg}
	${xl}
`;
