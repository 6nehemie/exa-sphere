'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Generate } from '@/types';
import { Trash } from 'lucide-react';
import { Button } from '../ui/button';

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
              'group flex justify-between w-full bg-inherit hover:bg-gray-exa-3 transition-colors duration-100 p-0 pr-1 h-auto rounded-2xl',
              {
                'bg-gray-exa-3': item.id === +params.id,
              }
            )}
          >
            <Link
              href={`/generate/${item.id}`}
              className={`${cn(
                'flex items-center justify-start w-full text-left overflow-x-hidden text-sm space-y-1 px-3 py-2'
              )}`}
            >
              <div className="lg:max-w-[186px] overflow-hidden whitespace-nowrap">
                <div className="">
                  <span>{item.company}</span>
                  {' - '}
                  <span className="font-light">{item.jobTitle}</span>
                </div>
              </div>
            </Link>

            <div
              onClick={() => console.log('delete', item.id)}
              className={cn(
                'max-lg:hidden p-2 opacity-0 group-hover:opacity-100 hover:bg-gray-exa-4 rounded-full transition-colors duration-150'
              )}
            >
              <Trash size={15} strokeWidth={1.5} className="text-gray-exa-1" />
            </div>
          </Button>
        );
      })}
    </div>
  );
};
export default GenerateNavigation;
