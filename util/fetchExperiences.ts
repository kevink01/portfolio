import { type Experience, experiencesSchema } from '@/types/experience';
import ExperiencesData from '@/data/experiences.json' assert { type: 'json' };
import { parse } from './parse';

export async function getExperiences(): Promise<Experience[] | []> {
	const parsed = parse<Experience[]>(experiencesSchema, ExperiencesData);
	if (!parsed.data) {
		return [];
	}
	return parsed.data.sort((a, b) => {
		if (!a.end_date) {
			if (!b.end_date) {
				return new Date(b.start_date).valueOf() - new Date(a.start_date).valueOf();
			}
			return 1;
		}
		if (!b.end_date) {
			return 1;
		}
		return new Date(b.end_date).valueOf() - new Date(a.end_date).valueOf();
	});
}
