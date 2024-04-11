import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import Link from 'next/link';

interface IProfileCard {
  id: number;
  title: string;
  description: string;
}

const ProfileCard = ({ profile }: { profile: IProfileCard }) => {
  return (
    <div>
      <Link
        href={`/my-profiles/${profile.id}`}
        key={profile.id}
        className={cn(
          'relative flex gap-4 p-5 border border-gray-2 rounded-lg md:hover:bg-gray-2 transition-colors duration-200'
        )}
      >
        <div className="p-1.5 rounded-full w-max h-max bg-gray-2">
          <User size={18} />
        </div>
        <div className="space-y-3.5">
          <h3 className="font-light">{profile.title}</h3>
          <p className="font-light text-sm text-gray-1">
            {profile.description}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default ProfileCard;
