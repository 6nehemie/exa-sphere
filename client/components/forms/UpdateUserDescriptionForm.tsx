'use client';

import { IUser } from '@/types';
import SettingsPreview from '../previews/SettingsPreview';

const UpdateUserDescriptionForm = ({ user }: { user: IUser }) => {
  return (
    <SettingsPreview
      title="Description"
      titleStyle="self-start"
      btnLabel="update description"
      btnAction={() => {}}
      content={
        <>
          <p className="font-light text-sm">{user.description}</p>
        </>
      }
    />
  );
};
export default UpdateUserDescriptionForm;
