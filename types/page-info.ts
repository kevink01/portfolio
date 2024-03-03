import { z } from 'zod';

export const pageInfoSchema = z.object({
	bio: z.array(z.string()),
	email: z.string(),
	figma_url: z.string(),
	name: z.string(),
	resume_url: z.string(),
	socials: z.array(z.object({ name: z.string(), url: z.string() })),
	source_code_url: z.string(),
	typings: z.array(z.string()),
});

export type PageInfo = z.infer<typeof pageInfoSchema>;
export type Socials = z.infer<typeof pageInfoSchema.shape.socials>;
