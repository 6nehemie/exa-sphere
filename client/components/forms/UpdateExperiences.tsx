'use client';

import { cn } from '@/lib/utils';
import { Profile } from '@/types';
import { useState } from 'react';
import AddItemBis from '../buttons/AddItemBis';
import ProfileFormWrapper from '../wrappers/ProfileFormWrapper';
import ExperienceCard from './ExperienceCard';

const UpdateExperiences = ({
  control,
  form,
  profile,
}: {
  control: any;
  form: any;
  profile?: Profile;
}) => {
  const numDefaultExperiences = profile?.experiences.length || 1;
  const [experience, setExperience] = useState<number>(numDefaultExperiences);

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
export default UpdateExperiences;
