if (!process.env.GATSBY_API_URL) {
	throw new Error("GATSBY_API_URL is not defined");
}

export const url = process.env.GATSBY_API_URL;
