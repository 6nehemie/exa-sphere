'use client';

import { cn } from '@/lib/utils';
import { ChevronLeft, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';

const ProfileTracking = () => {
  const pathname = usePathname();
  return (
    <div>
      <div
        className={cn('flex items-center gap-2 text-sm font-light', {
          hidden: pathname !== '/my-profiles',
        })}
      >
        <div className="bg-gray-2 rounded-full p-1.5">
          <Users size={12} />
        </div>
        <span>Profiles</span>
      </div>

      <a
        href="/my-profiles"
        className={cn(
          'flex items-center gap-2 text-sm font-light hover:underline w-max',
          {
            hidden: pathname === '/my-profiles',
          }
        )}
      >
        <div className="bg-gray-2 rounded-full p-1">
          <ChevronLeft size={16} />
        </div>
        <span>Return</span>
      </a>
    </div>
  );
};
export default ProfileTracking;
