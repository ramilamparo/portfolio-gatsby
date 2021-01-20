import type { LinkItem } from "../components/presentational/NavBar";

const Home: LinkItem = {
	to: "/",
	label: "Home"
};

const About: LinkItem = {
	to: "/#about",
	label: "About"
};

const Projects: LinkItem = {
	to: "/#projects",
	label: "Projects"
};

const Contact: LinkItem = {
	to: "/contact",
	label: "Contact"
};

export const links = [Home, About, Projects, Contact];
