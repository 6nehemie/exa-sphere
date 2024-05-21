'use client';

import { useAppDispatch } from '@/lib/hooks';
import ExaSphere from '../icons/ExaSphere';
import { toggleSidebar } from '@/lib/features/sidebar.ts/sidebarSlice';
import { AlignJustify } from 'lucide-react';

const SidebarTrigger = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="lg:hidden fixed flex items-center gap-3 top-[18px] left-4 z-[500]">
      <button
        onClick={() => dispatch(toggleSidebar())}
        className=" p-2 rounded-full hover:bg-gray-exa-3 transition-colors duration-200"
      >
        <AlignJustify size={22} />
      </button>

      <ExaSphere href="/my-profiles" text="" />
    </div>
  );
};
export default SidebarTrigger;
