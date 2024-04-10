'use client';

import { IUser } from '@/types';
import UpdateAvatar from './UpdateAvatar';
import UpdateNameForm from './UpdateNameForm';

interface IAvatarAndNameForm {
  user: IUser;
}

const AvatarAndNameForm: React.FC<IAvatarAndNameForm> = ({ user }) => {
  return (
    <div className="space-y-10">
      <UpdateAvatar user={user} />

      <UpdateNameForm user={user} />
    </div>
  );
};
export default AvatarAndNameForm;
