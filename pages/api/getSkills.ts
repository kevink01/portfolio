import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '@/sanity';
import { groq } from 'next-sanity';
import { Skill } from 'typings';

const query = groq`
	*[_type=="skills"]
`;

type Data = {
	skills: Skill[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const skills: Skill[] = await sanityClient.fetch(query);
		skills.sort((a, b) => b.progress - a.progress || a.name.localeCompare(b.name));
		res.status(200).json({ skills });
	} catch (err) {
		res.status(400).json({ skills: [] });
	}
}
