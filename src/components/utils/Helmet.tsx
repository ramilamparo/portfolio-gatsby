import React from "react";
import ReactHelmet from "react-helmet";

export interface HelmetProps {
	title?: string;
}

export const Helmet = ({ title = "Ram's Personal Website" }: HelmetProps) => {
	return (
		<ReactHelmet
			title={title}
			meta={[
				{
					name: "msapplication-TileColor",
					content: "#602cba"
				},
				{
					name: "msapplication-TileColor",
					content: "#ffffff"
				}
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
