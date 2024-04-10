'use client';

import { IUser } from '@/types';
import SettingsPreview from '../previews/SettingsPreview';
import UpdateDescriptionForm from '../forms/UpdateDescriptionForm';
import { useState } from 'react';

const UpdateUserDescription = ({ user }: { user: IUser }) => {
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
            <p className="font-light text-sm">{user.description}</p>
          )}

          {isEditing && <UpdateDescriptionForm user={user} />}
        </>
      }
    />
  );
};
export default UpdateUserDescription;
