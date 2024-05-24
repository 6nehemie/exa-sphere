'use client';

import { Generate } from '@/types';
import SidebarHistoryBtn from '../buttons/SidebarHistoryBtn';

const GenerateNavigation = ({
  generatedList,
  closeSidebar,
}: {
  generatedList: Generate[];
  closeSidebar: () => void;
}) => {
  // Function to check if the screen is less than lg
  const handleClick = () => {
    if (window.innerWidth < 1024) {
      closeSidebar();
    }
  };

  return (
    <div className="w-full overflow-hidden pb-10">
      {generatedList.map((generatedItem, index) => {
        return (
          <SidebarHistoryBtn
            key={index}
            generatedItem={generatedItem}
            onClick={handleClick}
          />
        );
      })}
    </div>
  );
};
export default GenerateNavigation;
