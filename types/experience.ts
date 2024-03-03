import { z } from 'zod';

const experienceSchema = z.object({
	id: z.coerce.number().int(),
	title: z.string(),
	company: z.string(),
	start_date: z.string(),
	end_date: z.string().nullable(),
	technologies: z.array(
		z.object({
			name: z.string(),
			image_url: z.string(),
		})
	),
	responsibilities: z.array(z.string()),
});

export const experiencesSchema = z.array(experienceSchema);

export type Experience = z.infer<typeof experienceSchema>;
export type Technologies = z.infer<typeof experienceSchema.shape.technologies>;
