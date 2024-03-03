import { z } from 'zod';

const skillSchema = z.object({
	name: z.string(),
	progress: z.coerce.number().int(),
	color: z.string().startsWith('#'),
	image_url: z.string(),
});

export const skillsSchema = z.array(skillSchema);

export type Skill = z.infer<typeof skillSchema>;
export type Skills = z.infer<typeof skillsSchema>;
