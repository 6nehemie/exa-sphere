import { settingsProfile } from '@/constants';
import { Separator } from '@/components/ui/separator';
import UpdateAvatarAndNameForm from '@/components/forms/UpdateAvatarAndNameForm';
import UpdateEmailForm from '@/components/forms/UpdateEmailForm';
import UpdateNumberForm from '@/components/forms/UpdateNumberForm';
import UpdateAddressForm from '@/components/forms/UpdateAddressForm';
import UpdateUserDescriptionForm from '@/components/forms/UpdateUserDescriptionForm';
import { userInfo } from '@/constants';

const ProfileSettings = () => {
  return (
    <section className="space-y-10">
      <div className="space-y-2 mb-12">
        <h1 className="text-2xl font-light">{settingsProfile.title}</h1>
        <p className="font-light text-sm text-gray-1">
          {settingsProfile.description}
        </p>
      </div>

      <Separator />

      <UpdateAvatarAndNameForm user={userInfo} />

      <Separator />

      <UpdateUserDescriptionForm user={userInfo} />

      <Separator />

      <UpdateEmailForm user={userInfo} />

      <Separator />

      <UpdateNumberForm user={userInfo} />

      <Separator />

      <UpdateAddressForm user={userInfo} />
    </section>
  );
};
export default ProfileSettings;
