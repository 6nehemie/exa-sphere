'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { Profile } from '@/types';
import deleteProfile from '@/utils/actions/profile/deleteProfile';
import updateProfileAction from '@/utils/actions/profile/updateProfileAction';
import experienceSchema from '@/utils/zod/experienceSchema';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Characteristics from '../forms/Characteristics';
import Experiences from '../forms/Experiences';
import ProfileDetails from '../forms/ProfileDetails';
import Skills from '../forms/Skills';
import { useToast } from '../ui/use-toast';

import ConfirmationModal from '../wrappers/ConfirmationModal';

const UpdateProfile = ({
  closeModal,
  profile,
}: {
  closeModal: () => void;
  profile: Profile;
}) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const form = useForm<z.infer<typeof experienceSchema>>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      title: profile?.title || '',
      description: profile?.description || '',
      skills: profile?.skills || '',
      experiences: [
        ...(profile?.experiences?.map((experience) => ({
          ...experience,
          // startDate: new Date(experience.startDate.slice(0, 10)),
          // endDate: experience.endDate
          //   ? new Date(experience.endDate.slice(0, 10))
          //   : undefined,
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

    const response = await updateProfileAction({ ...values, id: profile.id });

    if (response && response.error) {
      setIsLoading(false);
      return console.error(response.error);
    }

    setIsLoading(false);

    toast({
      title: 'Profile Updated',
      description: 'Your profile has been updated',
    });

    router.refresh();
  }

  const handleDeleteProfile = async () => {
    const response = await deleteProfile(profile.id);
    setIsDeleting(true);

    if (response && response.error) {
      toast({
        title: 'Error',
        variant: 'destructive',
        description: 'Failed to delete profile',
      });
      return console.error(response.error);
    }

    setIsDeleting(false);
    router.refresh();
    closeModal();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="add-profile-form-grid overflow-y-auto"
      >
        <div className="px-6 py-4 col-span-2 space-y-12 h-full overflow-y-auto pb-12">
          <ProfileDetails control={form.control} />

          <Skills control={form.control} />

          <Experiences control={form.control} form={form} />

          <Characteristics control={form.control} />
        </div>

        <div className="flex items-center justify-end gap-2 relative border-t border-gray-exa-3 px-6 py-4">
          <ConfirmationModal
            title="Delete Profile?"
            description="You will no longer see this profile in Exasphere."
            cancelLabel="Cancel"
            confirmLabel="Delete Profile"
            confirmAction={handleDeleteProfile}
            confirmStyle="bg-red-500 font-light hover:bg-red-700"
            cancelStyle="bg-gray-exa-4 border-none font-light hover:bg-gray-highlight-1 hover:text-white"
          >
            <div
              aria-disabled={isDeleting || isLoading}
              className="rounded-sm text-gray-exa-1 text-sm py-2 px-3 cursor-pointer border border-red-600 bg-red-500 hover:bg-red-700 transition-colors duration-200"
            >
              <Loader2
                className={cn('mr-2 h-4 w-4 animate-spin font-light', {
                  hidden: !isDeleting,
                })}
              />
              <span>{isDeleting ? 'Deleting Profile' : 'Delete Profile'}</span>
            </div>
          </ConfirmationModal>

          <Button
            type="submit"
            disabled={isLoading || isDeleting}
            className="rounded-sm bg-gray-exa-3 hover:bg-gray-highlight-1 text-gray-exa-1 hover:text-white py-2 px-3 font-light"
          >
            <Loader2
              className={cn('mr-2 h-4 w-4 animate-spin font-light', {
                hidden: !isLoading,
              })}
            />
            <span>{isLoading ? 'saving...' : 'Save Profile'}</span>
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default UpdateProfile;
