import { graphql, useStaticQuery } from "gatsby";
import { GatsbyQueryMultiResponse } from "../../typings/utils";

interface Responsibility {
	id: string;
	responsibility: string;
}

interface StrapiWorkHistory {
	id: string;
	companyName: string;
	start: string;
	end: string | null;
	role: string;
	responsibilities: Array<Responsibility>;
}

export interface AllStrapiWorkHistoriesResponse {
	id: string;
	companyName: string;
	start: Date;
	end: Date | null;
	role: string;
	responsibilities: Responsibility[];
}

export const useAllStrapiWorkHistories = (): AllStrapiWorkHistoriesResponse[] => {
	const query = useStaticQuery<
		GatsbyQueryMultiResponse<StrapiWorkHistory>
	>(graphql`
		{
			allStrapiWorkHistories {
				nodes {
					id
					companyName
					start
					end
					role
					responsibilities {
						id
						responsibility
					}
				}
			}
		}
	`);

	return query.allStrapiWorkHistories.nodes.map((workHistory) => ({
		id: workHistory.id,
		companyName: workHistory.companyName,
		role: workHistory.role,
		start: new Date(workHistory.start),
		end: workHistory.end ? new Date(workHistory.end) : null,
		responsibilities: workHistory.responsibilities
	}));
};
