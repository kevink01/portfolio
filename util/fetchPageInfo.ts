import pageInfo from '@/data/info.json' assert { type: 'json' };
import { parse } from './parse';
import { pageInfoSchema, type PageInfo } from '@/types/page-info';

export async function getPageInfo(): Promise<PageInfo> {
	const parsed = parse<PageInfo>(pageInfoSchema, pageInfo);
	if (!parsed.success) {
		return {
			name: 'Kevin Kulich',
			bio: [],
			email: '',
			figma_url: '',
			resume_url: '',
			socials: [],
			source_code_url: 'https://github.com/kevink01/portfolio',
			typings: ['My name is Kevin Kulich', 'Enjoy my profile!'],
		};
	}
	return parsed.data;
}
