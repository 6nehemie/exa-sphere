'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { AlignJustify, Plus, Users } from 'lucide-react';
import { toggleSidebar } from '@/lib/features/sidebar.ts/sidebarSlice';
import Link from 'next/link';

const SideBar = () => {
  const dispatch = useAppDispatch();
  const sidebar = useAppSelector((state) => state.sidebar);

  return (
    <div
      className={cn(
        'sidebar-grid fixed z-[200] max-lg:max-w-[85vw] lg:sticky top-0 w-full h-screen bg-gray-exa-5 px-4  py-4 transition-max-width duration-500 ease-in-out',
        {
          'max-lg:-translate-x-[100%] lg:max-w-[68px]': !sidebar.isOpen,
          'max-lg:translate-x-0 lg:max-w-[284px]': sidebar.isOpen,
        }
      )}
    >
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="max-lg:hidden fixed left-2.5 top-3 lg:top-3.5 p-3.5 rounded-full hover:bg-gray-exa-3 transition-colors duration-200"
      >
        <AlignJustify size={22} />
      </button>

      {/* //? Navigation */}
      <div className="pt-28 space-y-4">
        <Link
          href={'/generate'}
          className={cn(
            'flex items-center w-max px-2.5 py-2 rounded-full bg-gray-exa-3 text-sm text-gray-exa-1 hover:bg-gray-highlight-1 hover:text-white transition-colors duration-500 whitespace-nowrap'
          )}
        >
          <Plus className="size-5 text-white" strokeWidth={1.2} />
          <div
            className={cn('overflow-hidden', {
              'lg:opacity-0 lg:max-w-0 transition-all duration-300':
                !sidebar.isOpen,
              'lg:opacity-100 lg:max-w-full ml-3 transition-all duration-300':
                sidebar.isOpen,
            })}
          >
            <span
              className={cn('', {
                hidden: !sidebar.isOpen,
              })}
            >
              New cover letter
            </span>
          </div>
        </Link>

        <Link
          href={'/my-profiles'}
          className="flex flex-1 items-center px-2.5 py-2 rounded-full text-sm text-gray-exa-1 hover:bg-gray-exa-3 hover:text-white transition-all duration-300 whitespace-nowrap"
        >
          <Users className="size-4 text-white" strokeWidth={1.2} />

          <div
            className={cn('transition-all duration-300 overflow-hidden', {
              'opacity-0 max-w-0 visibility:hidden ': !sidebar.isOpen,
              'opacity-100 max-w-full ml-3 visibility:visible': sidebar.isOpen,
            })}
          >
            <span
              className={cn('', {
                hidden: !sidebar.isOpen,
              })}
            >
              My Profiles
            </span>
          </div>
        </Link>
      </div>

      <div>test</div>

      <div>test</div>
    </div>
  );
};
export default SideBar;
