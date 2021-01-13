import React from "react";
import { DateUtils } from "../../../utils/DateUtils";
import { IoBriefcase } from "react-icons/io5";
import { WorkHistory, WorkHistoryProps } from "./WorkHistory";
import styled from "styled-components";
import { IconTypography } from "../IconTypography";

export interface WorkHistoryListProps {
	workHistories: Array<WorkHistoryProps & { id: string }>;
}

const StyledIconTypography = styled(IconTypography)`
	margin-top: 5rem;
`;

export const WorkHistoryList = ({ workHistories }: WorkHistoryListProps) => {
	return (
		<>
			<StyledIconTypography icon={IoBriefcase} variant="header3">
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
