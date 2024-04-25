'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { cn } from '@/lib/utils';
import educationSchema from '@/utils/zod/educationSchema';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';
import EducationCard from './EducationCard';
import AddItemBis from '../buttons/AddItemBis';
import postEducationAction from '@/utils/actions/education/postEducationAction';
import { Education } from '@/types';

const UpdateEducation = ({
  educationsList,
}: {
  educationsList: Education[];
}) => {
  const router = useRouter();
  const { toast } = useToast();

  //? Get the number of default educations
  const numDefaultEducations =
    educationsList.length > 0 ? educationsList.length : 0;

  const [educationNum, setEducationNum] = useState(numDefaultEducations);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof educationSchema>>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      education: [
        ...(educationsList || {
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
        className="xl:grid grid-cols-3 gap-x-5 gap-y-4"
      >
        <div className="col-span-2 space-y-8">
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

        <div className="relative max-xl:mt-10">
          <div className="xl:pl-16 xl:sticky xl:top-[140px] space-y-2">
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
              <span>{isLoading ? 'saving...' : 'Save Education'}</span>
            </Button>

            <p className="font-light text-sm text-gray-1">
              By saving your education details, you are creating a new profile
              that will be used to help generate a cover letter tailored to your
              profile.
            </p>
          </div>
        </div>
      </form>
    </Form>
  );
};
export default UpdateEducation;
