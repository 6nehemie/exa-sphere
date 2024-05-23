'use client';

import { Plus } from 'lucide-react';

const AddItem = ({
  label,
  btnAction,
}: {
  label: string;
  btnAction?: () => void;
}) => {
  return (
    <button
      onClick={btnAction}
      className="flex items-center gap-4 focus:no-underline transition-all duration-200 text-gray-exa-1 hover:text-white"
    >
      <div className="flex items-center justify-center bg-gray-exa-5 h-9 w-9 rounded-full">
        <Plus size={24} className="" strokeWidth={1.8} />
      </div>
      <span className="text-sm">{label}</span>
    </button>
  );
};
export default AddItem;
