import { PageInfo } from '@/typings';

export async function getPageInfo() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
	const data = await res.json();
	const info: PageInfo = data.info;
	return info;
}
