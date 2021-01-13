import React from "react";
import { DateUtils } from "../../../utils/DateUtils";
import { Typography } from "../Typography";

export interface WorkDateProps {
	start: Date;
	end?: Date;
}

export const WorkDate = ({ start, end }: WorkDateProps) => {
	return (
		<Typography variant="caption">{`${DateUtils.getDate(start)} - ${
			end ? DateUtils.getDate(end) : "Current"
		}`}</Typography>
	);
};
