import { cn } from '@/lib/utils';
import { Profile } from '@/types';
import { User } from 'lucide-react';
import Link from 'next/link';

const ProfileCard = ({ profile }: { profile: Profile }) => {
  return (
    <Link
      href={`/my-profiles/${profile.id}`}
      key={profile.id}
      className={cn(
        'relative flex gap-4 p-5 border border-gray-2 rounded-lg md:hover:bg-gray-2 transition-colors duration-200 min-h-[140px]'
      )}
    >
      <div className="p-1.5 rounded-full w-max h-max bg-gray-2">
        <User size={18} />
      </div>
      <div className="space-y-3.5">
        <h3 className="font-light">{profile.title}</h3>
        <p className="font-light text-sm text-gray-1">
          {profile?.description || ''}
        </p>
      </div>
    </Link>
  );
};
export default ProfileCard;
