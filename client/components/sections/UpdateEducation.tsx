'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import { Education } from '@/types';
import postEducationAction from '@/utils/actions/education/postEducationAction';
import educationSchema from '@/utils/zod/educationSchema';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import AddItemBis from '../buttons/AddItemBis';
import { useToast } from '../ui/use-toast';
import EducationCard from './EducationCard';

const UpdateEducation = ({
  educations,
  closeModal,
}: {
  educations: Education[];
  closeModal: () => void;
}) => {
  const router = useRouter();
  const { toast } = useToast();

  //? Get the number of default educations
  const numDefaultEducations = educations.length > 0 ? educations.length : 0;

  const [educationNum, setEducationNum] = useState(numDefaultEducations);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof educationSchema>>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      education: [
        ...(educations || {
          degree: '',
          institution: '',
          graduationYear: '',
          description: '',
        }),
      ],
    },
  });

  async function onSubmit(values: z.infer<typeof educationSchema>) {
    setIsLoading(true);

    const response = await postEducationAction(values.education);

    if (response && response.error) {
      toast({
        title: 'Error',
        description: 'An error occurred while saving your education details.',
      });

      setIsLoading(false);
      return console.error(response.error);
    }

    setIsLoading(false);
    toast({
      title: 'Education Saved',
      description: 'Your education details have been saved successfully.',
    });
    router.refresh();
  }

  const handleAddEducation = () => {
    if (educationNum < 3 && form.getValues().education.length < 3) {
      setEducationNum(educationNum + 1);

      form.setValue('education', [
        ...form.getValues().education,
        {
          degree: '',
          institution: '',
          graduationYear: '',
          description: '',
        },
      ]);
    }
  };

  const removeLastExperience = () => {
    if (form.getValues().education.length > 0 && educationNum > 0) {
      form.setValue('education', [...form.getValues().education.slice(0, -1)]);
      setEducationNum(educationNum - 1);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="add-profile-form-grid overflow-y-auto"
      >
        <div className="px-6 py-4 col-span-2 space-y-8 h-full overflow-y-auto">
          {[...Array(educationNum)].map((_, index) => (
            <EducationCard
              key={index}
              control={form.control}
              form={form}
              index={index}
            />
          ))}

          <div className="grid grid-cols-2 justify-between pt-2">
            {educationNum < 3 && (
              <AddItemBis
                btnAction={handleAddEducation}
                label="Add Education"
              />
            )}

            <div
              onClick={removeLastExperience}
              className={cn(
                'text-sm font-light text-gray-1 hover:text-white transition-colors duration-200 cursor-pointer col-start-2 justify-self-end',
                {
                  hidden: educationNum === 0,
                }
              )}
            >
              <span>Remove experience</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 relative border-t border-gray-exa-3 px-6 py-4">
          {/* <div
            // onClick={handleCancel}
            onClick={closeModal}
            className="rounded-sm text-gray-exa-1 text-sm font-light py-2.5 px-3 cursor-pointer border border-gray-exa-3 hover:bg-gray-exa-4 transition-colors duration-200"
          >
            Cancel
          </div> */}

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
            <span>{isLoading ? 'Saving...' : 'Save Infos'}</span>
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default UpdateEducation;
