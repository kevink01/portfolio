import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '@/sanity';
import { groq } from 'next-sanity';
import { Project } from 'typings';

const query = groq`
	*[_type == "projects"] {
		...,
		technologies[]->
  	}
`;

type Data = {
	projects: Project[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const projects: Project[] = await sanityClient.fetch(query);
		res.status(200).json({ projects });
	} catch {
		res.status(400).json({ projects: [] });
	}
}
