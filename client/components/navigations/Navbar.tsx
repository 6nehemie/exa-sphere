'use client';

import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import ExaSphere from '../icons/ExaSphere';
import NavMenu from './NavMenu';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        'grid grid-cols-2 md:grid-cols-3 sticky top-0 z-[100] bg-gray-exa-6  p-side py-5',
        {
          'mb-14 md:mb-[68px]': !pathname.startsWith('/generate'),
        }
      )}
    >
      <div className="max-lg:hidden self-center w-max">
        <ExaSphere href="/my-profiles" text="max-sm:hidden" />
      </div>

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
    </nav>
  );
};
export default Navbar;
