export abstract class DateUtils {
	public static getYear = (date: Date) => date.getFullYear();

	public static getMonth = (date: Date) =>
		String(date.getMonth() + 1).padStart(2, "0");

	public static getDayOfMonth = (date: Date) =>
		String(date.getDate()).padStart(2, "0");

	public static getUnix = (date: Date) => date.getTime();

	public static getDate = (date: Date): string => {
		const year = DateUtils.getYear(date);
		const month = DateUtils.getMonth(date);
		const day = DateUtils.getDayOfMonth(date);

		return `${year}/${month}/${day}`;
	};
}
