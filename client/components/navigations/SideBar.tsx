'use client';

import {
  toggleSidebar,
  closeSidebar,
} from '@/lib/features/sidebar.ts/sidebarSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { AlignJustify, Plus, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';
import SidebarButton from '../buttons/SidebarButton';

import { Generate } from '@/types';
import { useEffect, useRef } from 'react';
import GenerateNavigation from './GenerateNavigation';

const SideBar = ({ history }: { history?: Generate[] }) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const sidebar = useAppSelector((state) => state.sidebar);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (sidebar.isOpen) {
      document.body.classList.add('max-lg:overflow-hidden');
    } else {
      document.body.classList.remove('max-lg:overflow-hidden');
    }

    return () => {
      document.body.classList.remove('max-lg:overflow-hidden');
    };
  }, [sidebar.isOpen]);

  return (
    <>
      <div
        onClick={() => dispatch(toggleSidebar())}
        className={cn(
          'lg:hidden fixed top-0 right-0 left-0 bottom-0 z-[190] backdrop-blur-[1px] bg-gray-exa-6 bg-opacity-30 transition-all duration-300 ease-in-out',
          {
            'invisible opacity-0': !sidebar.isOpen,
            'visible opacity-100': sidebar.isOpen,
          }
        )}
      ></div>

      <div
        ref={sidebarRef}
        className={cn(
          'sidebar-grid fixed z-[200] max-lg:max-w-[85vw] lg:sticky top-0 w-full h-screen bg-gray-exa-5 px-4 py-4 transition-max-width duration-500 ease-in-out',
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
        <div className="pt-12 lg:pt-20 space-y-4">
          <SidebarButton
            href="/generate"
            isOpen={sidebar.isOpen}
            text="New letter"
            disabled={pathname === '/generate'}
            className={cn('max-lg:hidden bg-gray-exa-4', {
              'hover:bg-gray-highlight-1': pathname !== '/generate',
            })}
          >
            <Plus className={cn('size-5')} strokeWidth={1.2} />
          </SidebarButton>

          <SidebarButton
            href="/my-profiles"
            isOpen={sidebar.isOpen}
            text="My Profiles"
            disabled={pathname === '/my-profiles'}
            className={cn('w-full', {
              'hover:bg-gray-exa-3': pathname !== '/my-profiles',
            })}
          >
            <Users className="size-4" strokeWidth={1.2} />
          </SidebarButton>
        </div>

        <div>
          <div
            className={cn('space-y-5 transition-all', {
              'max-w-0 opacity-0 duration-300': !sidebar.isOpen,
              'max-w-full opacity-100 duration-500': sidebar.isOpen,
            })}
          >
            <p className="px-3 text-sm font-light">Recent</p>

            <div className="w-full">
              <GenerateNavigation
                generatedList={history!}
                closeSidebar={() => dispatch(closeSidebar())}
              />
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};
export default SideBar;
