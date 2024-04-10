'use client';

import { IUser } from '@/types';
import SettingsPreview from '../previews/SettingsPreview';
import UpdateEmailForm from '../forms/UpdateEmailForm';
import { useState } from 'react';

const UpdateEmail = ({ user }: { user: IUser }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <SettingsPreview
      title="Email"
      btnLabel="Update email"
      isEditing={isEditing}
      btnAction={() => setIsEditing((prev) => !prev)}
      content={
        <>
          {!isEditing && <p className="font-light">{user.email}</p>}

          {isEditing && <UpdateEmailForm user={user} />}
        </>
      }
    />
  );
};
export default UpdateEmail;
