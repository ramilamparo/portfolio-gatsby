import React from "react";
import { Header as HeaderPresentational } from "../presentational/Header";
import { links } from "../../config/header";

export const Header = () => {
	return <HeaderPresentational links={links} />;
};
