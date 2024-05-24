import AddItem from '@/components/buttons/AddItem';
import ProfileCard from '@/components/cards/ProfileCard';
import AddNewProfile from '@/components/sections/AddNewProfile';
import { jobProfiles } from '@/constants';
import { cn } from '@/lib/utils';
import { Profile } from '@/types';
import getAllProfilesAction from '@/utils/actions/profile/getAllProfilesAction';
import Link from 'next/link';

export const revalidate = 0;

const MyProfiles = async () => {
  const profiles = (await getAllProfilesAction()) as Profile[];

  return (
    <section className="space-y-14">
      <div className="space-y-2">
        <h1 className="text-3xl">{jobProfiles.title}</h1>
        <p className="text-sm text-gray-exa-1">{jobProfiles.description}</p>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {profiles.map((profile) => {
          return <ProfileCard profile={profile} key={profile.id} />;
        })}

        {profiles.length < 5 && (
          // <Link
          //   href="/my-profiles/new"
          //   className={cn(
          //     'hover:bg-gray-exa-4 rounded-xl p-2 px-3 w-max transition-colors duration-200 max-sm:mx-auto max-sm:mt-10 h-max'
          //   )}
          // >
          //   <AddItem label="Add New Profile" />
          // </Link>
          <AddNewProfile />
        )}
      </div>
    </section>
  );
};
export default MyProfiles;
