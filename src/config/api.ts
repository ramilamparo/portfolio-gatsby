const { GATSBY_API_URL } = process.env;

if (!GATSBY_API_URL) {
	throw new Error("API_URL is not defined");
}

export const url = GATSBY_API_URL;
