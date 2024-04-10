'use client';

import { IUser } from '@/types';
import SettingsPreview from '../previews/SettingsPreview';

const UpdateNumberForm = ({ user }: { user: IUser }) => {
  return (
    <SettingsPreview
      title="Phone number"
      btnLabel="Update phone number"
      btnAction={() => {}}
      content={
        <>
          <p className="font-light">{user.phone}</p>
        </>
      }
    />
  );
};
export default UpdateNumberForm;
