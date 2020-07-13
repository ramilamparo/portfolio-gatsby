import React, { ReactElement, PropsWithChildren } from "react";
import { CssBaseline } from "./CssBaseline";
import logo from "../../assets/images/icon.png";
import { NavBarContent } from "../NavBarContent";

export interface BaseLayoutProps {
	currentPath: string;
}

export const BaseLayout = (
	props: PropsWithChildren<BaseLayoutProps>
): ReactElement => {
	return (
		<>
			<NavBarContent
				logo={{
					src: logo,
					alt: "Logo"
				}}
				links={[
					{
						to: "/",
						label: "Home",
						icon: "home"
					},
					{
						to: "/about",
						label: "About",
						icon: "person"
					},
					{
						to: "/skills",
						label: "Skills",
						icon: "edit"
					},
					{
						to: "/portfolio",
						label: "Portfolio",
						icon: "dashboard"
					},
					{
						to: "/contact",
						label: "Contact",
						icon: "mail"
					}
				]}
				currentPath={props.currentPath}
			>
				{props.children}
			</NavBarContent>
			<CssBaseline />
		</>
	);
};
