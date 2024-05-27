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

const NewProfile = ({ closeModal }: { closeModal: () => void }) => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof experienceSchema>>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      title: '',
      description: '',
      skills: '',
      experiences: [
        {
          jobTitle: '',
          company: '',
          location: '',
          startDate: undefined,
          endDate: undefined,
          responsibilities: '',
          achievements: '',
        },
      ],

      characteristics: '',
    },
  });

  async function onSubmit(values: z.infer<typeof experienceSchema>) {
    setIsLoading(true);

    const response = await postProfileAction(values);

    if (response && response.error) {
      setIsLoading(false);
      return console.error(response.error);
    }

    setIsLoading(false);
    toast({
      title: 'Profile Created',
      description: 'Your profile has been created successfully',
    });

    form.reset();
    router.refresh();
    closeModal();
  }

  const handleCancel = () => {
    form.reset();
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
          <div
            onClick={handleCancel}
            className="rounded-sm text-gray-exa-1 text-sm font-light py-2.5 px-3 cursor-pointer border border-gray-exa-3 hover:bg-gray-exa-4 transition-colors duration-200"
          >
            Cancel
          </div>

          <Button
            type="submit"
            disabled={isLoading}
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
export default NewProfile;
