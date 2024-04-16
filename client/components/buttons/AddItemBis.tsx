'use client';

import { Plus } from 'lucide-react';

const AddItemBis = ({
  label,
  btnAction,
}: {
  label: string;
  btnAction?: () => void;
}) => {
  return (
    <div
      onClick={btnAction}
      className="flex items-center gap-4 hover:underline focus:no-underline transition-all duration-200 cursor-pointer w-max"
    >
      <div className="bg-gray-2 p-0.5 rounded-full">
        <Plus size={20} className="" strokeWidth={0.8} />
      </div>
      <span className="text-sm font-light">{label}</span>
    </div>
  );
};
export default AddItemBis;
