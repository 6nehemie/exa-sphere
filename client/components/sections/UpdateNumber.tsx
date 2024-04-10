'use client';

import { IUser } from '@/types';
import SettingsPreview from '../previews/SettingsPreview';
import { useState } from 'react';
import UpdateNumberForm from '../forms/UpdateNumberForm';

const UpdateNumber = ({ user }: { user: IUser }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <SettingsPreview
      title="Phone number"
      btnLabel="Update phone number"
      isEditing={isEditing}
      btnAction={() => setIsEditing((prev) => !prev)}
      content={
        <>
          {!isEditing && <p className="font-light">{user.phone}</p>}
          {isEditing && <UpdateNumberForm user={user} />}
        </>
      }
    />
  );
};
export default UpdateNumber;
