'use client';

import { IUser } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import toInitials from '@/utils/functions/toInitials';
import SettingsPreview from '../previews/SettingsPreview';

const UpdateAvatarAndNameForm = ({ user }: { user: IUser }) => {
  return (
    <SettingsPreview
      title="Profile"
      btnLabel="Edit profile"
      btnAction={() => {}}
      content={
        <>
          <div className=" flex items-center gap-8">
            <Avatar className="size-[84px]">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{toInitials(user.fullName)}</AvatarFallback>
            </Avatar>

            <p className="font-light">{user.fullName}</p>
          </div>
        </>
      }
    />
  );
};
export default UpdateAvatarAndNameForm;
