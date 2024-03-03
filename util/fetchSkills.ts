import { type Skill, skillsSchema } from '@/types/skill';
import SkillData from '@/data/skills.json' assert { type: 'json' };
import { parse } from './parse';

export async function getSkills(): Promise<Skill[] | []> {
	const parsed = parse<Skill[]>(skillsSchema, SkillData);

	if (!parsed.success) {
		return [];
	}
	return parsed.data.sort((a, b) => b.progress - a.progress || a.name.localeCompare(b.name));
}
