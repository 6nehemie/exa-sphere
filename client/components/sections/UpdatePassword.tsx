'use client';

import { useState } from 'react';
import SettingsPreview from '../previews/SettingsPreview';
import UpdatePasswordForm from '../forms/UpdatePasswordForm';

const UpdatePassword = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <SettingsPreview
      title="Password"
      titleStyle="self-start"
      btnLabel="update password"
      isEditing={isEditing}
      btnAction={() => setIsEditing((prev) => !prev)}
      content={
        <>
          {!isEditing && <p className="font-light text-sm">•••••••••••</p>}
          {isEditing && (
            <UpdatePasswordForm closeForm={() => setIsEditing(false)} />
          )}
        </>
      }
    />
  );
};
export default UpdatePassword;
