'use client';

import { cn } from '@/lib/utils';

import { Plus, X } from 'lucide-react';
import { useState } from 'react';
import NewJobProfile from '@/components/sections/NewProfile';

const AddNewProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className={cn(
          'hover:bg-gray-exa-4 rounded-xl p-2 px-3 w-max transition-colors duration-200 max-sm:mx-auto max-sm:mt-10 h-max cursor-pointer'
        )}
      >
        <div className="flex items-center gap-4 focus:no-underline transition-all duration-200 text-gray-exa-1 hover:text-white">
          <div className="flex items-center justify-center bg-gray-exa-5 h-9 w-9 rounded-full">
            <Plus size={24} className="" strokeWidth={1.8} />
          </div>
          <span className="text-sm">Add Profile</span>
        </div>
      </div>

      {/* //? backdrop */}
      <div
        onClick={() => setIsModalOpen(false)}
        className={cn(
          'fixed top-0 right-0 left-0 bottom-0 z-[499] backdrop-blur-[1px] bg-gray-exa-6 bg-opacity-30 transition-all duration-300 ease-in-out',
          {
            'invisible opacity-0': !isModalOpen,
            'visible opacity-100': isModalOpen,
          }
        )}
      />

      {/* //? Modal */}
      <div
        className={cn(
          'add-profile-modal-grid fixed top-0 right-0 bottom-0 z-[500] bg-gray-exa-5 max-w-[778px] w-full min-[778px]:rounded-l-2xl duration-300 ease-in-out',
          {
            'translate-x-[100%]': !isModalOpen,
            'translate-x-0': isModalOpen,
          }
        )}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-exa-3">
          <h2 className="font-medium">Add a new profile</h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="p-2 bg-gray-exa-3 rounded-xl text-gray-exa-1 hover:bg-gray-highlight-1 hover:text-white transition-colors duration-200"
          >
            <X size={20} className="" strokeWidth={1.8} />
          </button>
        </div>

        <NewJobProfile closeModal={() => setIsModalOpen(false)} />
      </div>
    </>
  );
};
export default AddNewProfile;
