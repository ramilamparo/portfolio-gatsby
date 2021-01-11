import React from "react";
import { NavBar as NavBarPresentational } from "../presentational/NavBar";
import { links } from "../../config/header";

export const NavBar = () => {
	return <NavBarPresentational links={links} />;
};
