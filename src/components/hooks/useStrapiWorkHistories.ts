import { graphql, useStaticQuery } from "gatsby";
import {
	SimplifiedStrapiMedia,
	StrapiMedia,
	StrapiResponse
} from "../../typings/utils";
import { ApiUtils } from "../../utils/ApiUtils";

interface StrapiWorkHistory {
	id: string;
	companyName: string;
	start: string;
	end: string | null;
	role: string;
	companyLogo: StrapiMedia;
	description: string;
}

export interface UseAllStrapiWorkHistorieData {
	id: string;
	companyName: string;
	start: Date;
	end: Date | null;
	role: string;
	companyLogo: SimplifiedStrapiMedia;
	description: string;
}

export const useStrapiWorkHistories = (): UseAllStrapiWorkHistorieData[] => {
	const query = useStaticQuery<
		StrapiResponse<"workHistories", StrapiWorkHistory[]>
	>(graphql`
		{
			strapi {
				workHistories {
					id
					companyName
					start
					end
					role
					description
					companyLogo {
						formats
						url
					}
				}
			}
		}
	`);

	return query.strapi.workHistories.map((workHistory) => ({
		id: workHistory.id,
		companyName: workHistory.companyName,
		role: workHistory.role,
		start: new Date(workHistory.start),
		end: workHistory.end ? new Date(workHistory.end) : null,
		companyLogo: ApiUtils.getMediaUrls(workHistory.companyLogo),
		description: workHistory.description
	}));
};
