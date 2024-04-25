'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { Profile } from '@/types';
import experienceSchema from '@/utils/zod/experienceSchema';
import { Loader2 } from 'lucide-react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import Characteristics from '../forms/Characteristics';
import ProfileDetails from '../forms/ProfileDetails';
import Skills from '../forms/Skills';
import UpdateExperiences from '../forms/UpdateExperiences';
import updateProfileAction from '@/utils/actions/profile/updateProfileAction';
import { useToast } from '@/components/ui/use-toast';
import deleteProfile from '@/utils/actions/profile/deleteProfile';

const UpdateProfile = ({ profile }: { profile?: Profile }) => {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const pathname = usePathname();
  const profileId = Number(params.profileId);

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof experienceSchema>>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      title: profile?.title || '',
      description: profile?.description || '',
      skills: profile?.skills || '',
      experiences: [
        ...(profile?.experiences?.map((experience) => ({
          ...experience,
          startDate: new Date(experience.startDate.slice(0, 10)),
          endDate: experience.endDate
            ? new Date(experience.endDate.slice(0, 10))
            : undefined,
        })) || [
          {
            jobTitle: '',
            company: '',
            location: '',
            startDate: new Date(),
            endDate: undefined,
            responsibilities: '',
            achievements: '',
          },
        ]),
      ],
      characteristics: profile?.characteristics || '',
    },
  });

  async function onSubmit(values: z.infer<typeof experienceSchema>) {
    setIsLoading(true);

    const response = await updateProfileAction({ ...values, id: profileId });

    if (response && response.error) {
      return console.error(response.error);
    }

    setIsLoading(false);

    toast({
      title: 'Profile Updated',
      description: 'Your profile has been updated successfully',
    });

    router.push(pathname);
  }

  const handleDeleteProfile = async () => {
    const response = await deleteProfile(profileId);

    if (response && response.error) {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Failed to delete profile',
      });
      return console.error(response.error);
    }

    router.refresh();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="xl:grid grid-cols-3 gap-x-5 space-y-14"
      >
        <div className="col-span-2 space-y-8">
          <ProfileDetails control={form.control} />

          <Skills control={form.control} />

          <UpdateExperiences
            control={form.control}
            form={form}
            profile={profile}
          />

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
              <span>{isLoading ? 'saving...' : 'Update Profile'}</span>
            </Button>

            <p className="font-light text-sm text-gray-1">
              By saving the profile, you are creating a new profile that will be
              used to help generate a cover letter tailored to your profile.
            </p>

            <div className="pt-4 flex justify-end">
              <div
                onClick={handleDeleteProfile}
                className="text-sm font-light text-red-500 hover:text-red-400 transition-colors duration-200 cursor-pointer py-1.5 px-2.5"
              >
                Delete
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};
export default UpdateProfile;
