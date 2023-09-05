import zod from 'zod';

const taskSchema = zod.object({
	name: zod.string({
		invalid_type_error: 'Movie title must be a string',
		required_error: 'Movie title is required'
	}).min(1).max(20)
});

export function validatePartialBody (input) {
	return taskSchema.partial().safeParse(input);
}