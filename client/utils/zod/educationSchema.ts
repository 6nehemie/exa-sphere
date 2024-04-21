import { z } from 'zod';

const educationSchema = z.object({
  education: z.array(
    z.object({
      degree: z
        .string()
        .min(1, 'Degree is required')
        .max(100, 'Degree is too long'),
      institution: z
        .string()
        .min(1, 'Institution is required')
        .max(100, 'Institution is too long'),
      graduationYear: z
        .string()
        .length(4, 'Graduation year must be 4 digits long')
        .refine(
          (value) => {
            return !isNaN(Number(value));
          },
          { message: 'Graduation year must be a number' }
        ),
      description: z.optional(z.string().max(250, 'Description is too long')),
    })
  ),
});

export default educationSchema;
