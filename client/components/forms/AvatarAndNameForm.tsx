'use client';

import { IUser, User } from '@/types';
import UpdateAvatar from './UpdateAvatar';
import UpdateNameForm from './UpdateNameForm';

interface IAvatarAndNameForm {
  user: User;
  closeForm: () => void;
}

const AvatarAndNameForm: React.FC<IAvatarAndNameForm> = ({
  user,
  closeForm,
}) => {
  return (
    <div className="space-y-10">
      <UpdateAvatar user={user} />

      <UpdateNameForm user={user} closeForm={closeForm} />
    </div>
  );
};
export default AvatarAndNameForm;
