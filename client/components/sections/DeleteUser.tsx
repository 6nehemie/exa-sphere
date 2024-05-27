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
          className="bg-red-500 1 h-10 hover:bg-red-700 text-white rounded-xl"
        >
          <span>Delete Account</span>
        </Button>
      }
    />
  );
};
export default DeleteUser;
