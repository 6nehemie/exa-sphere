import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import toInitials from '@/utils/functions/toInitials';
import { ChangeEvent, useState } from 'react';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { IUser, User } from '@/types';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import updateAvatarAction from '@/utils/actions/user/updateAvatarAction';
import { updateUser } from '@/lib/features/user/userSlice';
import deleteAvatarAction from '@/utils/actions/user/deleteAvatarAction';

const UpdateAvatar = ({ user }: { user: User }) => {
  const dispatch = useAppDispatch();
  const fullName = `${user.firstName} ${user.lastName}`;

  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleAvatarUpdate = async (event: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    if (!event.target.files) return;

    const file = event.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append('avatar', file);

    const response = await updateAvatarAction(formData);

    if (response.error) {
      console.error(response.error);
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    dispatch(updateUser(response));
  };

  const handleAvatarDelete = async () => {
    setIsDeleting(true);

    const response = await deleteAvatarAction();

    if (response.error) {
      console.error(response.error);
      setIsLoading(false);
      return;
    }

    setIsDeleting(false);
    dispatch(updateUser(response));
  };

  return (
    <div className="flex items-center gap-6">
      <Avatar className="size-16">
        <AvatarImage src={user.avatar} />
        <AvatarFallback>{toInitials(fullName)}</AvatarFallback>
      </Avatar>

      <div className="flex items-center gap-2">
        <Button
          disabled={isLoading}
          className={cn('border border-gray-2 bg-gray-3', {
            hidden: isDeleting || isLoading,
          })}
          asChild
        >
          <Label
            aria-disabled={isLoading ? 'true' : 'false'}
            htmlFor="avatar"
            className="cursor-pointer font-light hover:text-gray-1 transition-colors duration-200"
          >
            <span>Update avatar</span>
          </Label>
        </Button>

        <p
          className={cn('text-sm font-light text-gray-1', {
            hidden: !isLoading,
          })}
        >
          <Loader2 className={cn('mr-2 h-4 w-4 animate-spin inline-block')} />
          <span>Updating...</span>
        </p>

        <Input
          onChange={handleAvatarUpdate}
          id="avatar"
          type="file"
          className="hidden"
          accept="image/*"
        />

        <Button
          disabled={isLoading || isDeleting}
          onClick={handleAvatarDelete}
          className={cn(
            'bg-transparent hover:bg-transparent font-light text-red-500 hover:text-red-400',
            {
              hidden: isLoading || !user.avatar,
            }
          )}
        >
          <Loader2
            className={cn('mr-2 h-4 w-4 animate-spin', {
              hidden: !isDeleting,
            })}
          />
          {!isDeleting ? 'Delete' : 'Deleting...'}
        </Button>
      </div>
    </div>
  );
};
export default UpdateAvatar;
