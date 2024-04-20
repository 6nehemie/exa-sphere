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
  const ExpOpen = profile?.experience3?.jobTitle
    ? 3
    : profile?.experience2?.jobTitle
    ? 2
    : 1;
  const [experience, setExperience] = useState<number>(ExpOpen);

  const addExperience = () => {
    if (experience < 3) {
      setExperience((prev) => prev + 1);
    }
  };

  const removeLastExperience = () => {
    if (experience > 1) {
      // set values to null
      // ? experience refers to the number of experiences (e.g. experience1, experience2, experience3)
      form.setValue(`experience${experience}.jobTitle`, '');
      form.setValue(`experience${experience}.company`, '');
      form.setValue(`experience${experience}.location`, '');
      form.setValue(`experience${experience}.startDate`, null);
      form.setValue(`experience${experience}.endDate`, null);
      form.setValue(`experience${experience}.responsibilities`, '');
      form.setValue(`experience${experience}.achievements`, '');

      setExperience((prev) => prev - 1);
    }
  };

  return (
    <ProfileFormWrapper
      title="Experiences"
      description="Your experiences shape credibility. One minimum required for a comprehensive profile. Add up to three to showcase skills."
    >
      <ExperienceCard control={control} experienceNum={1} form={form} />

      {experience > 1 && (
        <ExperienceCard control={control} experienceNum={2} form={form} />
      )}

      {experience > 2 && (
        <ExperienceCard control={control} experienceNum={3} form={form} />
      )}

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
