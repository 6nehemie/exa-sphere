'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Generate } from '@/types';
import { Button } from '../ui/button';
import { Ellipsis } from 'lucide-react';

const GenerateNavigation = ({
  generatedList,
}: {
  generatedList: Generate[];
}) => {
  const params = useParams();

  return (
    <div className="w-full overflow-hidden pb-10">
      {/* <div className="overflow-hidden customScroll generateNav pb-10 space-y-2"> */}
      {generatedList.map((item, index) => {
        return (
          <Button
            key={index}
            className={cn(
              'flex justify-between w-full bg-inherit hover:bg-gray-exa-3 transition-colors duration-100 p-0 pr-1 h-auto rounded-2xl',
              {
                'bg-gray-exa-3': item.id === +params.id,
              }
            )}
          >
            <Link
              href={`/generate/${item.id}`}
              className={`${cn(
                'flex items-center justify-start w-full text-left overflow-x-hidden text-sm space-y-1 px-4 py-2.5'
              )}`}
            >
              <div className="max-w-[185px] overflow-hidden whitespace-nowrap">
                <div className="">
                  <span>{item.company}</span>
                  {' - '}
                  <span className="font-light">{item.jobTitle}</span>
                </div>
                {/* <div className="font-light text-gray-1"></div> */}
              </div>
            </Link>

            <button
              className={cn(
                'p-1.5 hover:bg-gray-exa-4 rounded-full transition-colors duration-150'
              )}
            >
              <Ellipsis size={20} strokeWidth={1.8} className="" />
            </button>
          </Button>
        );
      })}
    </div>
  );
};
export default GenerateNavigation;
