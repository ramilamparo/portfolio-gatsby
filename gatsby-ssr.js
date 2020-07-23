"use strict";

const react = require("react");

exports.onRenderBody = function ({ setHeadComponents }) {
	setHeadComponents([
		react.createElement("link", {
			key: "leaflet",
			rel: "stylesheet",
			href: "https://unpkg.com/leaflet@1.6.0/dist/leaflet.css",
			integrity:
				"sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==",
			crossOrigin: ""
		}),
		react.createElement("link", {
			key: "jam-icons",
			rel: "stylesheet",
			href: "https://unpkg.com/jam-icons/css/jam.min.css"
		}),
		react.createElement("script", {
			type: "module",
			key: "ionicons",
			src: "https://unpkg.com/ionicons@5.1.2/dist/ionicons.esm.js"
		}),
		react.createElement("script", {
			key: "ionicons-nonmodule",
			noModule: "",
			src: "https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"
		})
	]);
};
