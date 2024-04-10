import { settingsProfile } from '@/constants';
import { Separator } from '@/components/ui/separator';
import UpdateAvatarAndName from '@/components/sections/UpdateAvatarAndName';
import UpdateEmail from '@/components/sections/UpdateEmail';
import UpdateNumber from '@/components/sections/UpdateNumber';
import UpdateAddress from '@/components/sections/UpdateAddress';
import UpdateUserDescription from '@/components/sections/UpdateUserDescription';
import { userInfo } from '@/constants';

const ProfileSettings = () => {
  return (
    <section className="space-y-14 md:space-y-10">
      <div className="space-y-2 mb-12">
        <h1 className="text-2xl font-light">{settingsProfile.title}</h1>
        <p className="font-light text-sm text-gray-1">
          {settingsProfile.description}
        </p>
      </div>

      <Separator />

      <UpdateAvatarAndName user={userInfo} />

      <Separator />

      <UpdateUserDescription user={userInfo} />

      <Separator />

      <UpdateEmail user={userInfo} />

      <Separator />

      <UpdateNumber user={userInfo} />

      <Separator />

      <UpdateAddress user={userInfo} />
    </section>
  );
};
export default ProfileSettings;
