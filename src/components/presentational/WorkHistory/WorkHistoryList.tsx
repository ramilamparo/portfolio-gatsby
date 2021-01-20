import React from "react";
import { DateUtils } from "../../../utils/DateUtils";
import { IoBriefcase } from "react-icons/io5";
import type { WorkHistoryProps } from "./WorkHistory";
import { WorkHistory } from "./WorkHistory";
import styled from "styled-components";
import { IconTypography } from "../IconTypography";

export interface WorkHistoryListProps {
	workHistories: Array<WorkHistoryProps & { id: string }>;
}

const StyledIconTypography = styled(IconTypography)`
	margin: 3rem 0 1rem 0;
`;

export const WorkHistoryList = ({ workHistories }: WorkHistoryListProps) => {
	return (
		<>
			<StyledIconTypography
				srLabel="Work Experience"
				icon={IoBriefcase}
				variant="header3"
			>
				Work Experience
			</StyledIconTypography>
			{workHistories
				.sort((a, b) => DateUtils.getUnix(b.start) - DateUtils.getUnix(a.start))
				.map(({ id, ...workHistoryProps }) => (
					<WorkHistory key={id} {...workHistoryProps} />
				))}
		</>
	);
};
