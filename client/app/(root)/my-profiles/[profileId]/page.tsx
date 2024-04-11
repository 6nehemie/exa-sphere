import UpdateProfile from '@/components/sections/UpdateProfile';
import { jobProfiles, profiles } from '@/constants';

const Profile = ({ params }: { params: { profileId: string } }) => {
  console.log(params.profileId);

  const profile = profiles.filter(
    (profile) => String(profile.id) === params.profileId
  );

  console.log('Profile: ', profile);

  return (
    <section>
      <div className="space-y-2 mb-12">
        <h1 className="text-2xl font-light">Update {jobProfiles.title}</h1>
        <p className="font-light text-sm text-gray-1 max-w-[830px]">
          {jobProfiles.description}
        </p>
      </div>

      <UpdateProfile profile={profile} />
    </section>
  );
};
export default Profile;
