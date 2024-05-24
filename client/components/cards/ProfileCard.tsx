'use client';

import { cn } from '@/lib/utils';
import { Profile } from '@/types';
import { X } from 'lucide-react';
import { useState } from 'react';
import UpdateProfile from '../sections/UpdateProfile';

const ProfileCard = ({ profile }: { profile: Profile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        key={profile.id}
        onClick={() => setIsModalOpen(true)}
        className={cn(
          'relative flex flex-col items-start text-left p-5 rounded-xl bg-gray-exa-5 md:hover:bg-gray-highlight-1 transition-colors duration-200 min-h-[140px] space-y-3.5 cursor-pointer'
        )}
      >
        <h3 className="">{profile.title}</h3>

        <p className="text-sm text-gray-exa-1">{profile?.description || ''}</p>
      </button>

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
          <h2 className="font-medium">Update Profile</h2>
          <button
            onClick={() => setIsModalOpen(false)}
            className="p-2 bg-gray-exa-3 rounded-xl text-gray-exa-1 hover:bg-gray-highlight-1 hover:text-white transition-colors duration-200"
          >
            <X size={20} className="" strokeWidth={1.8} />
          </button>
        </div>

        <UpdateProfile
          profile={profile}
          closeModal={() => setIsModalOpen(false)}
        />
      </div>
    </>
  );
};

export default ProfileCard;
