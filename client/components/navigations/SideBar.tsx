'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { AlignJustify, Plus, Users } from 'lucide-react';
import { toggleSidebar } from '@/lib/features/sidebar.ts/sidebarSlice';
import Link from 'next/link';
import SidebarButton from '../buttons/SidebarButton';

const SideBar = () => {
  const dispatch = useAppDispatch();
  const sidebar = useAppSelector((state) => state.sidebar);

  return (
    <div
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
      <div className="pt-28 space-y-4">
        <SidebarButton
          href="/generate"
          isOpen={sidebar.isOpen}
          text="New letter"
          CN="bg-gray-exa-4 hover:bg-gray-highlight-1"
        >
          <Plus className="size-5 text-white" strokeWidth={1.2} />
        </SidebarButton>

        <SidebarButton
          href="/my-profiles"
          isOpen={sidebar.isOpen}
          text="New letter"
          CN="hover:bg-gray-exa-3 w-full"
        >
          <Users className="size-4 text-white" strokeWidth={1.2} />
        </SidebarButton>
      </div>

      <div>test</div>

      <div>test</div>
    </div>
  );
};
export default SideBar;
