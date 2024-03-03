import { z } from 'zod';

const projectSchema = z.object({
	id: z.coerce.number().int(),
	name: z.string(),
	description: z.string(),
	complete: z.boolean(),
	in_progress: z.boolean(),
	technologies: z.array(
		z.object({
			name: z.string(),
			image_url: z.string(),
		})
	),
	source_url: z.string(),
	live_demo: z.string().nullable(),
	image_url: z.string(),
});

export const projectsSchema = z.array(projectSchema);
export type Project = z.infer<typeof projectSchema>;
