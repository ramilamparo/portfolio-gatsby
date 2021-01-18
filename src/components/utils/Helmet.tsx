import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ReactHelmet from "react-helmet";

export interface HelmetProps {
	description?: string;
	meta?: JSX.IntrinsicElements["meta"][];
	title?: string;
	lang?: string;
}

interface SEOStaticQuery {
	site: {
		siteMetadata: {
			title: string;
			description: string;
			author: string;
		};
	};
}

export const Helmet = ({
	description = "",
	lang = "en",
	meta = [],
	title = "Ramil Amparo - Personal Website"
}: HelmetProps) => {
	const { site } = useStaticQuery<SEOStaticQuery>(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);

	const metaDescription = description || site.siteMetadata.description;

	return (
		<ReactHelmet
			htmlAttributes={{
				lang
			}}
			title={title}
			meta={[
				{
					name: "description",
					content: metaDescription
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: metaDescription
				},
				{
					property: "og:type",
					content: "website"
				},
				{
					name: "twitter:card",
					content: "summary"
				},
				{
					name: "twitter:creator",
					content: site.siteMetadata.author
				},
				{
					name: "twitter:title",
					content: title
				},
				{
					name: "twitter:description",
					content: metaDescription
				},
				{
					name: "msapplication-TileColor",
					content: "#602cba"
				},
				{
					name: "msapplication-TileColor",
					content: "#ffffff"
				},
				...meta
			]}
			link={[
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/apple-touch-icon.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon-32x32.png"
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/favicon-16x16.png"
				},
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/apple-touch-icon.png"
				},
				{
					rel: "mask-icon",
					href: "/safari-pinned-tab.svg",
					color: "#455ad5"
				}
			]}
		/>
	);
};
