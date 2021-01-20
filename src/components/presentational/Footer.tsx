import React from "react";
import { Typography } from "./Typography";

export const Footer = () => {
	return (
		<Typography variant="caption">
			Copyright © {new Date().getFullYear()} Ramil Amparo
		</Typography>
	);
};
