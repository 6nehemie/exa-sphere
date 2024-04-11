import AddItem from '@/components/buttons/AddItem';
import ProfileCard from '@/components/cards/ProfileCard';
import { jobProfiles, profiles } from '@/constants';
import Link from 'next/link';

const MyProfiles = () => {
  return (
    <section>
      <div className="space-y-2 mb-12">
        <h1 className="text-2xl font-light">{jobProfiles.title}</h1>
        <p className="font-light text-sm text-gray-1 max-w-[830px]">
          {jobProfiles.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 items-start gap-5">
        {profiles.map((profile) => {
          return <ProfileCard profile={profile} key={profile.id} />;
        })}

        <Link
          href="/my-profiles/new"
          className="hover:underline transition-transform duration-200 p-5 w-max"
        >
          <AddItem label="Add New Profile" />
        </Link>
      </div>
    </section>
  );
};
export default MyProfiles;
