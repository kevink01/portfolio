import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '@/sanity';
import { groq } from 'next-sanity';
import { Experience, Skill } from 'typings';

const query = groq`
	*[_type == "experiences"] {
		...,
		technologies[]->
  	}
`;

type Data = {
	experiences: Experience[];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	try {
		const experiences: Experience[] = await sanityClient.fetch(query);
		experiences.sort((a, b) => {
			if (a.isWorkingHere) {
				if (b.isWorkingHere) {
					return a.startDate - b.startDate;
				} else {
					return 1;
				}
			} else {
				if (b.isWorkingHere) {
					return 1;
				} else {
					return a.endDate - b.endDate;
				}
			}
		});
		res.status(200).json({ experiences });
	} catch {
		res.status(400).json({ experiences: [] });
	}
}
