'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import ExaSphere from '../icons/ExaSphere';
import { toggleSidebar } from '@/lib/features/sidebar.ts/sidebarSlice';
import { AlignJustify } from 'lucide-react';

const SidebarTrigger = () => {
  const dispatch = useAppDispatch();
  const sidebar = useAppSelector((state) => state.sidebar);

  return (
    <div className="fixed flex items-center gap-5 top-7 left-6 z-[500]">
      <button
        onClick={() => dispatch(toggleSidebar())}
        className=" p-2 rounded-full hover:bg-gray-exa-3 transition-colors duration-200"
      >
        <AlignJustify size={22} />
      </button>

      <ExaSphere href="/my-profiles" text="max-sm:hidden" />
    </div>
  );
};
export default SidebarTrigger;
