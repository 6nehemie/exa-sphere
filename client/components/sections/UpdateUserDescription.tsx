'use client';

import { IUser } from '@/types';
import SettingsPreview from '../previews/SettingsPreview';
import UpdateDescriptionForm from '../forms/UpdateDescriptionForm';
import { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';

const UpdateUserDescription = () => {
  const user = useAppSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <SettingsPreview
      title="Description"
      titleStyle="self-start"
      btnLabel="update description"
      isEditing={isEditing}
      btnAction={() => setIsEditing((prev) => !prev)}
      content={
        <>
          {!isEditing && (
            <p className="font-light text-sm">{user.description || ''}</p>
          )}

          {isEditing && (
            <UpdateDescriptionForm
              user={user}
              closeForm={() => setIsEditing(false)}
            />
          )}
        </>
      }
    />
  );
};
export default UpdateUserDescription;
