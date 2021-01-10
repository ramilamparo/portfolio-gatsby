import React, { useMemo } from "react";
import { links } from "../config/header";
import { Link } from "./Link";

export const Header = () => {
	const headerLinks = useMemo(() => {
		return links.map(({ to, label }) => (
			<Link key={to + label} to={to}>
				{label}
			</Link>
		));
	}, []);

	return <nav>{headerLinks}</nav>;
};
