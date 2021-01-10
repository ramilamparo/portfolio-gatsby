export interface Link {
	label: string;
	to: string;
}

const Home: Link = {
	to: "/",
	label: "Home"
};

const About: Link = {
	to: "/about",
	label: "About"
};

const Projects: Link = {
	to: "/projects",
	label: "Projects"
};

const Contact: Link = {
	to: "/contact",
	label: "Contact"
};

export const links = [Home, About, Projects, Contact];
