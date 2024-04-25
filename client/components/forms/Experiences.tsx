'use client';

import { ReactNode, useState } from 'react';
import AddItemBis from '../buttons/AddItemBis';
import ProfileFormWrapper from '../wrappers/ProfileFormWrapper';
import ExperienceCard from './ExperienceCard';
import { cn } from '@/lib/utils';
import { Profile } from '@/types';

const Experiences = ({
  control,
  form,
  profile,
}: {
  control: any;
  form: any;
  profile?: Profile;
}) => {
  const [experience, setExperience] = useState<number>(1);

  const addExperience = () => {
    if (experience < 3) {
      setExperience((prev) => prev + 1);

      form.setValue('experiences', [
        ...form.getValues('experiences'),
        {
          jobTitle: '',
          company: '',
          location: '',
          startDate: '',
          endDate: '',
          responsibilities: '',
          achievements: '',
        },
      ]);
    }
  };

  const removeLastExperience = () => {
    if (experience > 1) {
      form.setValue('experiences', [
        ...form.getValues('experiences').slice(0, -1),
      ]);
      setExperience((prev) => prev - 1);
    }
  };

  return (
    <ProfileFormWrapper
      title="Experiences"
      description="Your experiences shape credibility. One minimum required for a comprehensive profile. Add up to three to showcase skills."
    >
      {/* <ExperienceCard control={control} experienceNum={1} form={form} /> */}

      {[...Array(experience)].map((_, index) => (
        <ExperienceCard
          key={index}
          control={control}
          index={index}
          form={form}
        />
      ))}

      <div className="grid grid-cols-2 justify-between pt-2">
        {experience < 3 && (
          <AddItemBis btnAction={addExperience} label="Add experience" />
        )}

        <div
          onClick={removeLastExperience}
          className={cn(
            'text-sm font-light text-gray-1 hover:text-white transition-colors duration-200 cursor-pointer col-start-2 justify-self-end',
            {
              hidden: experience === 1,
            }
          )}
        >
          <span>Remove experience</span>
        </div>
      </div>
    </ProfileFormWrapper>
  );
};
export default Experiences;
