import UpdateProfile from '@/components/sections/UpdateProfile';
import { jobProfiles } from '@/constants';
import getProfileAction from '@/utils/actions/profile/getProfileAction';
import { redirect } from 'next/navigation';

const Profile = async ({ params }: { params: { profileId: string } }) => {
  const profile = await getProfileAction(params.profileId);

  if (profile.error) {
    redirect('/my-profiles');
  }

  return (
    <section>
      <div className="space-y-2 mb-12">
        <h1 className="text-2xl font-light">{jobProfiles.title}</h1>
        <p className="font-light text-sm text-gray-1 max-w-[830px]">
          {jobProfiles.description}
        </p>
      </div>

      <UpdateProfile profile={profile} />
    </section>
  );
};
export default Profile;
