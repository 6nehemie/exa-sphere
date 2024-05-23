import { cn } from '@/lib/utils';
import { Profile } from '@/types';
import Link from 'next/link';

const ProfileCard = ({ profile }: { profile: Profile }) => {
  return (
    <Link
      href={`/my-profiles/${profile.id}`}
      key={profile.id}
      className={cn(
        'relative p-5 rounded-xl bg-gray-exa-5 md:hover:bg-gray-highlight-1 transition-colors duration-200 min-h-[140px] space-y-3.5'
      )}
    >
      <h3 className="">{profile.title}</h3>

      <p className="text-sm text-gray-exa-1">{profile?.description || ''}</p>
    </Link>
  );
};
export default ProfileCard;
