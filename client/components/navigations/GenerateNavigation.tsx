'use client';

import { cn } from '@/lib/utils';
import { FilePenLine, Repeat2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Generate } from '@/types';

const GenerateNavigation = ({
  generatedList,
}: {
  generatedList: Generate[];
}) => {
  const params = useParams();

  return (
    <div className="max-[1300px]:hidden fixed h-full w-[283px] pb-20 space-y-4">
      <div className="sticky top-0 pb-2 bg-gray-3">
        <Link
          href="/generate"
          className="flex py-1.5 px-2.5 bg-transparent hover:bg-gray-2 rounded-md items-center justify-between text-sm text-gray-1 hover:text-white transition-colors duration-200 ease-in-out"
        >
          <div className="flex items-center gap-2">
            <Repeat2 className="" size={24} strokeWidth={1.4} />

            <span>Generate new</span>
          </div>
          <div>
            <FilePenLine size={16} strokeWidth={1.4} />
          </div>
        </Link>
      </div>

      <div className="overflow-hidden overflow-y-scroll customScroll generateNav pb-10 space-y-2">
        {generatedList.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/generate/${item.id}`}
              className={`generateCard ${cn(
                ' flex items-center justify-between  text-sm space-y-1 rounded-sm hover:bg-gray-2 transition-colors duration-100 ',
                {
                  'bg-gray-2': item.id === +params.id,
                }
              )}`}
            >
              <div className="py-2 px-4 w-full">
                <div>
                  {item.company} - {item.jobTitle}
                </div>
                <div className="text-xs font-light text-gray-1">
                  {item.location}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default GenerateNavigation;
