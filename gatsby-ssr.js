"use strict";

const react = require("react");

exports.onRenderBody = function ({ setHeadComponents }) {
	setHeadComponents([
		react.createElement("link", {
			key: "jam-icons",
			rel: "stylesheet",
			href: "https://unpkg.com/jam-icons/css/jam.min.css"
		}),
		react.createElement("script", {
			key: "ionicons",
			src: "https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"
		})
	]);
};
