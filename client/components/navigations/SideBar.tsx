'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { AlignJustify } from 'lucide-react';
import { toggleSidebar } from '@/lib/features/sidebar.ts/sidebarSlice';

const SideBar = () => {
  const dispatch = useAppDispatch();
  const sidebar = useAppSelector((state) => state.sidebar);

  return (
    <div
      className={cn(
        'fixed z-[200] max-lg:max-w-[85vw] lg:sticky top-0 w-full h-screen bg-gray-exa-5 px-2.5 py-4 transition-max-width duration-500 ease-in-out',
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

      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default SideBar;
