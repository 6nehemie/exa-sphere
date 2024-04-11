'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import Characteristics from '../forms/Characteristics';
import Experiences from '../forms/Experiences';
import ProfileDetails from '../forms/ProfileDetails';
import Skills from '../forms/Skills';

const formSchema = z.object({
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

  experience: z.object({
    jobTitle: z.string().min(1, { message: 'Job title is required' }),
    company: z.string().min(1, { message: 'Company is required' }),
    location: z.string().min(1, { message: 'Location is required' }),
    startDate: z.string().min(1, { message: 'Start Date is required' }),
    endDate: z.string(),
    responsibilities: z
      .string()
      .min(1, { message: 'Responsibilities is required' }),
    achievements: z.string().min(1).optional(),
  }),

  experience2: z
    .object({
      jobTitle: z.string().min(1, { message: 'Job title is required' }),
      company: z.string().min(1, { message: 'Company is required' }),
      location: z.string().min(1, { message: 'Location is required' }),
      startDate: z.string().min(1, { message: 'Start Date is required' }),
      endDate: z.string(),
      responsibilities: z
        .string()
        .min(1, { message: 'Responsibilities is required' }),
      achievements: z.string().min(1).optional(),
    })
    .optional(),

  experience3: z
    .object({
      jobTitle: z.string().min(1, { message: 'Job title is required' }),
      company: z.string().min(1, { message: 'Company is required' }),
      location: z.string().min(1, { message: 'Location is required' }),
      startDate: z.string().min(1, { message: 'Start Date is required' }),
      endDate: z.string(),
      responsibilities: z
        .string()
        .min(1, { message: 'Responsibilities is required' }),
      achievements: z.string().min(1).optional(),
    })
    .optional(),

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

const NewProfile = () => {
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      skills: '',
      experience: {
        jobTitle: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        responsibilities: '',
        achievements: '',
      },
      experience2: {
        jobTitle: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        responsibilities: '',
        achievements: '',
      },
      experience3: {
        jobTitle: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        responsibilities: '',
        achievements: '',
      },
      characteristics: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="xl:grid grid-cols-3 gap-x-5 space-y-14"
      >
        <div className="col-span-2 space-y-8">
          <ProfileDetails control={form.control} />

          <Skills control={form.control} />

          <Experiences control={form.control} />

          <Characteristics control={form.control} />
        </div>

        <div className="relative">
          <div className="xl:pl-16 xl:sticky top-[140px] space-y-2">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-sm h-12 bg-white hover:bg-gray-1 text-gray-3"
            >
              <Loader2
                className={cn('mr-2 h-4 w-4 animate-spin font-light', {
                  hidden: !isLoading,
                })}
              />
              <span>{isLoading ? 'saving...' : 'Save Profile'}</span>
            </Button>

            <p className="font-light text-sm text-gray-1">
              By saving the profile, you are creating a new profile that will be
              used to help generate a cover letter tailored to your profile.
            </p>
          </div>
        </div>
      </form>
    </Form>
  );
};
export default NewProfile;
