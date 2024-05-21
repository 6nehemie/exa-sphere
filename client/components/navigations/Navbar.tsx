'use client';

import { cn } from '@/lib/utils';
import Logo from '../icons/Logo';
import { navigation } from '@/constants/index';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import NavMenu from './NavMenu';
import ExaSphere from '../icons/ExaSphere';
import { AlignJustify, Plus } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { toggleSidebar } from '@/lib/features/sidebar.ts/sidebarSlice';

const Navbar = () => {
  const pathname = usePathname();

  const dispatch = useAppDispatch();
  const sidebar = useAppSelector((state) => state.sidebar);

  return (
    <nav>
      <div
        className={cn(
          'grid grid-cols-2 md:grid-cols-3 p-side py-5 sticky top-0 z-[100] mb-14 md:mb-[68px] bg-gray-exa-6'
        )}
      >
        <div className="max-lg:hidden self-center">
          <ExaSphere href="/my-profiles" text="max-sm:hidden" />
        </div>

        {/* <div
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
      </div> */}

        <div className="col-start-2 md:col-start-3 justify-self-end flex items-center gap-6 md:gap-5">
          <button className="max-lg:hidden font-openSans font-light text-xs px-4 py-3 rounded-2xl bg-gray-exa-3 hover:bg-gray-highlight-1 transition-colors duration-200">
            Pro <span className={cn('max-sm:hidden')}>member</span>
          </button>

          <Link
            href="/generate"
            className="lg:hidden flex items-center justify-center size-8 bg-gray-exa-3 rounded-full hover:bg-gray-highlight-1 transition-colors duration-200"
          >
            <Plus className="size-5" />
          </Link>

          <NavMenu />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
