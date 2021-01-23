import React from "react";
import styled from "styled-components";
import { Typography } from "../Typography";
import { WorkDate } from "./WorkDate";
import { Markdown } from "../Markdown";

export interface WorkHistoryProps {
	companyName: string;
	companyLogo?: string;
	description: string;
	role: string;
	start: Date;
	end?: Date;
}

const StyledCompanyNameTypography = styled(Typography)`
	margin-right: 1rem;
`;

const StyledRoleTypography = styled(Typography)``;

const StyledLogoImg = styled.img`
	width: 8rem;
	height: 5rem;
	object-fit: scale-down;
	margin: 0 2rem 0 1rem;
`;
const Container = styled.div`
	display: flex;
`;

const WorkHistoryHeader = styled.div`
	display: flex;
	margin-bottom: -1rem;
`;

const WorkHistoryContainer = styled.div``;

export const WorkHistory = ({
	companyName,
	companyLogo,
	description,
	role,
	start,
	end
}: WorkHistoryProps) => {
	return (
		<Container>
			<StyledLogoImg src={companyLogo} alt={companyName} />
			<WorkHistoryContainer>
				<WorkHistoryHeader>
					<StyledCompanyNameTypography variant="paragraph">
						{companyName}
					</StyledCompanyNameTypography>
					<WorkDate start={start} end={end} />
				</WorkHistoryHeader>
				<StyledRoleTypography variant="caption">{role}</StyledRoleTypography>
				<Markdown>{description}</Markdown>
			</WorkHistoryContainer>
		</Container>
	);
};
