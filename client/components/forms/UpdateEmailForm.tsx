'use client';

import { IUser } from '@/types';
import SettingsPreview from '../previews/SettingsPreview';

const UpdateEmailForm = ({ user }: { user: IUser }) => {
  return (
    <SettingsPreview
      title="Email"
      btnLabel="Update email"
      btnAction={() => {}}
      content={
        <>
          <p className="font-light">{user.email}</p>
        </>
      }
    />
  );
};
export default UpdateEmailForm;
