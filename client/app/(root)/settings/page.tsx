import DeleteUser from '@/components/sections/DeleteUser';
import UpdateAddress from '@/components/sections/UpdateAddress';
import UpdateAvatarAndName from '@/components/sections/UpdateAvatarAndName';
import UpdateEmail from '@/components/sections/UpdateEmail';
import UpdateUserDescription from '@/components/sections/UpdateUserDescription';
import { Separator } from '@/components/ui/separator';
import { settingsProfile } from '@/constants';

const ProfileSettings = async () => {
  return (
    <section className="space-y-14 md:space-y-10">
      <div className="space-y-2 mb-12">
        <h1 className="text-2xl font-light">{settingsProfile.title}</h1>
        <p className="font-light text-sm text-gray-1">
          {settingsProfile.description}
        </p>
      </div>

      <Separator />

      <UpdateAvatarAndName />

      <Separator />

      <UpdateUserDescription />

      <Separator />

      <UpdateEmail />

      {/* <Separator />

      <UpdateNumber user={userInfo} /> */}

      <Separator />

      <UpdateAddress />

      <Separator />

      <DeleteUser />
    </section>
  );
};
export default ProfileSettings;
