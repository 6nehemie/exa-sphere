'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ProfileTracking = () => {
  const pathname = usePathname();
  return (
    <p className="flex items-center gap-2 font-light text-sm text-gray-1">
      <Link
        href={'/my-profiles'}
        className="hover:underline transition-transform duration-200"
      >
        my profiles
      </Link>

      <span
        className={cn('', {
          hidden: pathname === '/my-profiles',
        })}
      >
        /
      </span>

      <Link
        href={'/my-profiles/new-profile'}
        className={cn('hover:underline transition-transform duration-200', {
          hidden: pathname !== '/my-profiles/new-profile',
        })}
      >
        new
      </Link>
    </p>
  );
};
export default ProfileTracking;
