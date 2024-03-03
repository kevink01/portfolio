import { z } from 'zod';

export type Parse<T> =
	| {
			success: true;
			data: T;
			errors: null;
	  }
	| {
			success: false;
			data: null;
			errors: { code: string; path: string | number; message: string }[];
	  };

export const parse = <T>(schema: z.Schema<T>, data: unknown): Parse<T> => {
	try {
		const result = schema.parse(data);
		return { success: true, data: result, errors: null };
	} catch (err: any) {
		if (err instanceof z.ZodError) {
			const error = err as z.ZodError;
			return {
				success: false,
				data: null,
				errors: error.issues.map((err) => {
					return {
						code: err.code,
						path:
							typeof err.path[0] === 'string' ? err.path.join('/') : err.path.map((val) => val.toString()).join('/'),
						message: err.message,
					};
				}),
			};
		} else {
			return {
				success: false,
				data: null,
				errors: [
					{
						code: 'custom',
						path: 'unknown',
						message: 'Unknown error',
					},
				],
			};
		}
	}
};
