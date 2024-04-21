'use client';

import { generatedCoverLetter } from '@/constants';
import { cn } from '@/lib/utils';
import { Ellipsis, FilePenLine, Repeat2 } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const GenerateNavigation = () => {
  const params = useParams();
  const router = useRouter();

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
        {generatedCoverLetter.map((item, index) => {
          return (
            <Link
              key={index}
              href={`/generate/${index}`}
              className={`generateCard ${cn(
                ' flex items-center justify-between  text-sm space-y-1 rounded-sm hover:bg-gray-2 transition-colors duration-100 ',
                {
                  'bg-gray-2': index === +params.id,
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

              {/* <div className={`generatedCardMenu`}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild className="">
                    <div className="py-1.5 px-2.5">
                      <Ellipsis size={18} />
                    </div>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-32 mx-6 z-[120] p-0">
                    <DropdownMenuItem
                      onClick={async () => {
                        console.log('Edit');
                        router.push(`/generate/${index}`);
                      }}
                      className="text-sm font-light p-1"
                    >
                      <button className="py-2.5 px-3.5 w-full text-start rounded-sm">
                        Delete
                      </button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default GenerateNavigation;
