'use client';

import deleteAccount from '@/utils/actions/user/deleteAccount';
import SettingsPreview from '../previews/SettingsPreview';
import { Button } from '../ui/button';

const DeleteUser = () => {
  return (
    <SettingsPreview
      title="Account"
      btnLabel="Update email"
      btnStyle="hidden"
      content={
        <Button
          onClick={async () => deleteAccount()}
          className="font-light bg-gray-2"
        >
          <span>Delete Account</span>
        </Button>
      }
    />
  );
};
export default DeleteUser;
