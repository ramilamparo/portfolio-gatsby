if (!process.env.GATSBY_CAPTCHA_SITE_KEY) {
	throw new Error("GATSBY_CAPTCHA_SITE_KEY is not defined.");
}

export const siteKey = process.env.GATSBY_CAPTCHA_SITE_KEY;
