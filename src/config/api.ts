const { API_URL } = process.env;

if (!API_URL) {
	throw new Error("API_URL is not defined");
}

export const url = API_URL;
