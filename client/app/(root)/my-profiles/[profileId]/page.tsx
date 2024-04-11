import UpdateProfile from '@/components/sections/UpdateProfile';
import { profiles } from '@/constants';

const Profile = ({ params }: { params: { profileId: string } }) => {
  console.log(params.profileId);

  const profile = profiles.filter(
    (profile) => String(profile.id) === params.profileId
  );

  console.log('Profile: ', profile);

  return (
    <div>
      <UpdateProfile profile={profile} />
    </div>
  );
};
export default Profile;
