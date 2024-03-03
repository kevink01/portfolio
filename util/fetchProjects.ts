import { Project, projectsSchema } from '@/types/project';
import ProjectData from '@/data/projects.json' assert { type: 'json' };
import { parse } from './parse';

export async function getProjects(): Promise<Project[] | []> {
	const parsed = parse<Project[]>(projectsSchema, ProjectData);
	if (!parsed.success) {
		return [];
	}
	return parsed.data;
}
