import { Skill } from '@/typings';

export async function getSkills() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);
	const data = await res.json();
	const skills: Skill[] = data.skills;
	return skills;
}
