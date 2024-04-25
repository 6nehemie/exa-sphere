import { z } from 'zod';

const generateSchema = z.object({
  jobTitle: z
    .string()
    .min(1, 'Job title is required')
    .max(100, 'Job title is too long'),
  company: z
    .string()
    .min(1, 'Company is required')
    .max(100, 'Company is too long'),
  location: z
    .string()
    .min(1, 'Location is required')
    .max(100, 'Location is too long'),
  jobType: z
    .string()
    .min(1, 'Job type is required')
    .max(100, 'Job type is too long'),
  experienceLevel: z
    .string()
    .min(1, 'Experience level is required')
    .max(100, 'Experience level is too long'),
  profileId: z.string().min(1, 'Profile is required'),
  description: z.string().min(1, 'Description is required'),
});

export default generateSchema;
