import { z } from 'zod';

const experienceSchema = z.object({
  title: z.string().min(1, { message: 'Profile Title is required' }),
  description: z.string().optional(),
  skills: z
    .string()
    .min(1, { message: 'At least one skill is required' })
    .refine(
      (skills) => {
        return skills.split(',').length <= 10;
      },
      { message: 'Skills should be less than 10' }
    ),

  experiences: z.array(
    z.object({
      jobTitle: z.string().min(1, { message: 'Job title is required' }),
      company: z.string().min(1, { message: 'Company is required' }),
      location: z.string().min(1, { message: 'Location is required' }),
      startDate: z.string(),
      endDate: z.string().optional(),
      responsibilities: z
        .string()
        .min(1, { message: 'Responsibilities is required' }),
      achievements: z.string().optional(),
    })
  ),

  characteristics: z
    .string()
    .min(1, { message: 'At least one characteristic is required' })
    .refine(
      (characteristic) => {
        return characteristic.split(',').length <= 8;
      },
      { message: 'Characteristics should be less than 10' }
    ),
});

export default experienceSchema;
