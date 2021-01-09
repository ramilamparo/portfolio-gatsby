require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: "Ramil Amparo",
		description:
			"This is my simple portfolio site to show off my skills and experience.",
		author: "Ramil Amparo"
	},
	plugins: [
		/**
		 * Allows gatsby to fetch data from strapi.
		 */
		{
			resolve: "gatsby-source-strapi",
			options: {
				apiURL: process.env.API_URL || "http://localhost:1337",
				contentTypes: ["portfolios", "skills", "work-histories"],
				queryLimit: 1000
			}
		},
		/**
		 * Webapp manifest part of the progressive web app specification.
		 * Allows user to add the site to their home screen on most mobile browsers.
		 */
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Ramil Amparo Portfolio",
				short_name: "Ramil",
				start_url: "/",
				background_color: "#070707",
				theme_color: "#070707",
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: "standalone",
				icon: "src/assets/images/icon.png" // This path is relative to the root of the site.
			}
		},
		/** Make google fonts with Roboto font and material icons available. */
		{
			resolve: "gatsby-plugin-google-fonts",
			options: {
				fonts: [
					"material icons",
					"roboto:300,400,500,700",
					"lato:300, 400, 700",
					"playfair:900"
				]
			}
		},
		/**
		 * Enables components which lives above pages
		 * and persists on page changes.
		 */ {
			resolve: "gatsby-plugin-layout",
			options: {
				component: require.resolve("./src/layouts/PageContainer.tsx")
			}
		},
		/**
		 * This has many uses, but we are using this for strapi-source-plugin to download the images
		 * and spit out a url.
		 */
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "assets",
				path: `${__dirname}/src`
			}
		},
		"gatsby-plugin-offline",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-typescript"
	]
};
