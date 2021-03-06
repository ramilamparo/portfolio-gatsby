import { url } from "../config/api";
import type { SimplifiedStrapiMedia, StrapiMedia } from "../typings/utils";

export abstract class ApiUtils {
	public static getFullMediaUrl = (path: string) => {
		return `${url}${path}`;
	};

	public static getMediaUrls = (media: StrapiMedia): SimplifiedStrapiMedia => {
		let thumbnailUrl: string | undefined;
		let smallUrl: string | undefined;
		let mediumUrl: string | undefined;
		let largeUrl: string | undefined;

		if (media.formats) {
			const { large, medium, small, thumbnail } = media.formats;
			thumbnailUrl = thumbnail && ApiUtils.getFullMediaUrl(thumbnail.url);
			smallUrl = small && ApiUtils.getFullMediaUrl(small.url);
			mediumUrl = medium && ApiUtils.getFullMediaUrl(medium.url);
			largeUrl = large && ApiUtils.getFullMediaUrl(large.url);
		}

		return {
			thumbnail: thumbnailUrl,
			small: smallUrl,
			medium: mediumUrl,
			large: largeUrl,
			original: ApiUtils.getFullMediaUrl(media.url)
		};
	};
}
