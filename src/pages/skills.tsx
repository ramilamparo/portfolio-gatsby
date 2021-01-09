import React, { ReactElement } from "react";
import { graphql } from "gatsby";
import { SEO } from "../components/utils/SEO";
import { SkillBar } from "../components/SkillBar";

interface SkillsProps {
	data: {
		allStrapiSkill: {
			nodes: Array<{
				strapiId: number;
				score: number;
				title: string;
				description: string;
				logo: {
					publicURL: string;
				};
			}>;
		};
	};
}

export default ({ data }: SkillsProps): ReactElement => {
	return (
		<>
			<SEO title={"About"} />
			{data.allStrapiSkill.nodes.map((skill) => (
				<SkillBar
					key={id.title}
					title={skill.title}
					score={skill.score}
					logo={skill.logo.publicURL}
					description={skill.description}
				/>
			))}
		</>
	);
};

export const query = graphql`
	query {
		allStrapiSkills {
			nodes {
				strapiId
				score
				title
				description
				logo {
					publicURL
				}
			}
		}
	}
`;
