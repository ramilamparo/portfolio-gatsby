const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		query {
			strapi {
				portfolios {
					id
				}
			}
		}
	`);
	result.data.strapi.portfolios.forEach(({ id }) => {
		const slug = `/portfolios/${id}`;
		createPage({
			path: slug,
			component: path.resolve(`./src/components/templates/PortfolioItem.tsx`),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				portfolioId: id
			}
		});
	});
};
