'use client';

import { cn } from '@/lib/utils';

import { X } from 'lucide-react';
import UpdateEducation from '../sections/UpdateEducation';
import { Education } from '@/types';

const UpdateUserInfo = ({
  isModalOpen,
  closeModal,
  educations,
}: {
  educations: Education[];
  isModalOpen: boolean;
  closeModal: () => void;
}) => {
  return (
    <>
      {/* //? backdrop */}
      <div
        onClick={closeModal}
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
          <h2 className="font-medium">Update Infos</h2>
          <button
            onClick={closeModal}
            className="p-2 bg-gray-exa-3 rounded-xl text-gray-exa-1 hover:bg-gray-highlight-1 hover:text-white transition-colors duration-200"
          >
            <X size={20} className="" strokeWidth={1.8} />
          </button>
        </div>

        <UpdateEducation closeModal={closeModal} educations={educations} />
      </div>
    </>
  );
};
export default UpdateUserInfo;
