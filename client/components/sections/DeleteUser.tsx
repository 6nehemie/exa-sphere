'use client';

import deleteAccount from '@/utils/actions/user/deleteAccount';
import SettingsPreview from '../previews/SettingsPreview';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

const DeleteUser = () => {
  const { toast } = useToast();
  return (
    <SettingsPreview
      title="Account"
      btnLabel="Update email"
      btnStyle="hidden"
      content={
        <Button
          onClick={async () => {
            await deleteAccount()
              .then(() => {
                toast({
                  description: 'Your account has been deleted.',
                });
              })
              .catch((error) => {
                toast({
                  description: 'Something went wrong, please try again.',
                });
              });
          }}
          className="font-light bg-gray-2"
        >
          <span>Delete Account</span>
        </Button>
      }
    />
  );
};
export default DeleteUser;
