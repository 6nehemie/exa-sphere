import ProfileCard from '@/components/cards/ProfileCard';
import AddNewProfile from '@/components/sections/AddNewProfile';
import { jobProfiles } from '@/constants';
import { Profile } from '@/types';
import getAllProfilesAction from '@/utils/actions/profile/getAllProfilesAction';

export const revalidate = 0;

const MyProfiles = async () => {
  const profiles = (await getAllProfilesAction()) as Profile[];

  return (
    <section className="space-y-14">
      <div className="space-y-2">
        <h1 className="text-3xl">{jobProfiles.title}</h1>
        <p className="text-sm text-gray-exa-1">{jobProfiles.description}</p>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 z-0">
        {profiles.map((profile) => {
          return <ProfileCard profile={profile} key={profile.id} />;
        })}

        {profiles.length < 5 && <AddNewProfile />}
      </div>
    </section>
  );
};
export default MyProfiles;
