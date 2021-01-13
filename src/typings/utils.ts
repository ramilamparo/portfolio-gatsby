export interface StrapiResponse<Key extends string, Data> {
	strapi: {
		[K in Key]: Data;
	};
}

export type StrapiMediaType = "thumbnail" | "large" | "medium" | "small";

export interface StrapiMediaFormat {
	url: string;
}
export interface StrapiMedia {
	formats: Record<StrapiMediaType, StrapiMediaFormat> | null;
	url: string;
}

export interface SimplifiedStrapiMedia {
	thumbnail?: string;
	small?: string;
	medium?: string;
	large?: string;
	original: string;
}
