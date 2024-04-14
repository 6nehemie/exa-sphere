'use client';

import { IUser } from '@/types';
import SettingsPreview from '../previews/SettingsPreview';
import UpdateEmailForm from '../forms/UpdateEmailForm';
import { useState } from 'react';
import { useAppSelector } from '@/lib/hooks';

const UpdateEmail = () => {
  const user = useAppSelector((state) => state.user);

  const [isEditing, setIsEditing] = useState(false);

  return (
    <SettingsPreview
      title="Email"
      btnLabel="Update email"
      isEditing={isEditing}
      btnAction={() => setIsEditing((prev) => !prev)}
      btnStyle={user.authType === 'OAUTH' ? 'hidden' : 'visible'}
      content={
        <>
          {!isEditing && <p className="font-light">{user.email}</p>}

          {isEditing && (
            <UpdateEmailForm
              user={user}
              closeForm={() => setIsEditing(false)}
            />
          )}
        </>
      }
    />
  );
};
export default UpdateEmail;
