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
import experienceSchema from '@/utils/zod/experienceSchema';
import postProfileAction from '@/utils/actions/profile/postProfileAction';
import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';

const NewProfile = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof experienceSchema>>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      title: '',
      description: '',
      skills: '',
      experience1:
        {
          jobTitle: '',
          company: '',
          location: '',
          startDate: undefined,
          endDate: undefined,
          responsibilities: '',
          achievements: '',
        } || null,
      experience2:
        {
          jobTitle: '',
          company: '',
          location: '',
          startDate: undefined,
          endDate: undefined,
          responsibilities: '',
          achievements: '',
        } || null,
      experience3:
        {
          jobTitle: '',
          company: '',
          location: '',
          startDate: undefined,
          endDate: undefined,
          responsibilities: '',
          achievements: '',
        } || null,
      characteristics: '',
    },
  });

  async function onSubmit(values: z.infer<typeof experienceSchema>) {
    setIsLoading(true);

    const response = await postProfileAction(values);

    if (response && response.error) {
      return console.error(response.error);
    }

    setIsLoading(false);
    toast({
      title: 'Profile Created',
      description: 'Your profile has been created successfully',
    });

    router.push('/my-profiles');
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

          <Experiences control={form.control} form={form} />

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
