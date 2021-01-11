require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`
});

const { API_URL } = process.env;

if (!API_URL) {
	throw new Error("API_URL is not defined in environment!");
}
console.log(API_URL);

module.exports = {
	siteMetadata: {
		title: "Ramil Amparo",
		description:
			"This is my simple portfolio site to show off my skills and experience.",
		author: "Ramil Amparo"
	},
	plugins: [
		/**
		 * Webapp manifest part of the progressive web app specification.
		 * Allows user to add the site to their home screen on most mobile browsers.
		 */
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Ram's Personal Website",
				short_name: "Ram's Website",
				start_url: "/",
				background_color: "#070707",
				theme_color: "#070707",
				display: "standalone",
				icons: [
					{
						src: "public/android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png"
					},
					{
						src: "public/android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png"
					}
				]
			}
		},
		{
			resolve: "gatsby-source-strapi",
			options: {
				apiURL: API_URL,
				queryLimit: 1000, // Default to 100
				contentTypes: [
					"portfolios",
					"skills",
					"thoughts",
					"work-histories",
					"work-responsibilities"
				],
				singleTypes: ["about-page", "contact-page"]
			}
		},
		/** Make google fonts with Roboto font and material icons available. */
		{
			resolve: "gatsby-plugin-google-fonts",
			options: {
				fonts: ["material icons", "roboto:300,400,500,700", "lato:300, 400, 700"]
			}
		},
		/**
		 * Enables components which lives above pages
		 * and persists on page changes.
		 */ {
			resolve: "gatsby-plugin-layout",
			options: {
				component: require.resolve("./src/components/utils/PageContainer.tsx")
			}
		},
		"gatsby-plugin-offline",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-typescript"
	]
};
