// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sanityClient } from '@/sanity';
import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { PageInfo } from 'typings';

const query = groq`
	*[_type == "pageInfo"] {
		...,
		socials[]->
  	}
`;

type Data = {
	info: PageInfo;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	const info: PageInfo = await sanityClient.fetch(query);
	res.status(200).json({ info });
}
