'use client';

import { cn } from '@/lib/utils';
import Logo from '../icons/Logo';
import { navigation } from '@/constants/index';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavMenu from './NavMenu';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        'grid grid-cols-2 md:grid-cols-3 p-side py-4 sticky top-0 mb-[68px]'
      )}
    >
      <Logo href="/my-profiles" text="max-sm:hidden" />

      <div
        className={cn('max-md:hidden justify-self-center space-x-6', {
          hidden: pathname.startsWith('/settings'),
        })}
      >
        {navigation.map((nav) => {
          const isActive = pathname.startsWith(nav.href);

          return (
            <Link
              key={nav.label}
              href={nav.href}
              className={cn(
                'text-sm font-light pb-1 border-b border-b-transparent',
                {
                  'border-b-white font-normal': isActive,
                }
              )}
            >
              {nav.label}
            </Link>
          );
        })}
      </div>

      <div className="md:col-start-3 justify-self-end">
        <NavMenu />
      </div>
    </nav>
  );
};
export default Navbar;
