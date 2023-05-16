import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '@/sanity';
import { groq } from 'next-sanity';
import { PageInfo } from 'typings';

const query = groq`
	*[_type == "pageInfo"] {
		...,
		socials[]->,
		"resumeURL": resume.asset->url
  	}
`;

type Data = {
	info: PageInfo | Partial<PageInfo>;
};

const defaultInfo: Partial<PageInfo> = {
	bio: ["Kevin's bio"],
	name: 'Kevin Kulich',
	email: 'kakulich01@gmail.com',
	sourceCodeURL: 'https://github.com/kevink01/portfolio',
	typings: ['My name is Kevin!', 'Enjoy my profile!'],
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const info: PageInfo[] = await sanityClient.fetch(query);
		res.status(200).json({ info: info[0] });
	} catch {
		res.status(400).json({ info: defaultInfo });
	}
}
