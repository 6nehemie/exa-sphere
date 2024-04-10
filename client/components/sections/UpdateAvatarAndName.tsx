'use client';

import { IUser } from '@/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import toInitials from '@/utils/functions/toInitials';
import SettingsPreview from '../previews/SettingsPreview';
import { useState } from 'react';
import AvatarAndNameForm from '../forms/AvatarAndNameForm';

const UpdateAvatarAndName = ({ user }: { user: IUser }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <SettingsPreview
      title="Profile"
      btnLabel="Edit profile"
      isEditing={isEditing}
      titleStyle="self-start"
      btnAction={() => setIsEditing((prev) => !prev)}
      content={
        <>
          {!isEditing && (
            <div className=" flex items-center gap-8">
              <Avatar className="size-[84px]">
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{toInitials(user.fullName)}</AvatarFallback>
              </Avatar>

              <p className="font-light">{user.fullName}</p>
            </div>
          )}

          {isEditing && <AvatarAndNameForm user={user} />}
        </>
      }
    />
  );
};
export default UpdateAvatarAndName;
