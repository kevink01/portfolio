export function convertToUTC(date: string): Date {
	const localDate = new Date(date);
	const utc = localDate.getTime();
	const offset = localDate.getTimezoneOffset() * 60000;
	return new Date(utc + offset);
}
