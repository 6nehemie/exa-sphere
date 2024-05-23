'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

import { useAppSelector } from '@/lib/hooks';
import { cn } from '@/lib/utils';
import { Education } from '@/types';
import toInitials from '@/utils/functions/toInitials';
import { GraduationCap } from 'lucide-react';
import { usePathname } from 'next/navigation';

const UserInfo = ({ educations }: { educations: Education[] }) => {
  const pathname = usePathname();
  const user = useAppSelector((state) => state.user);
  const fullName = `${user.firstName} ${user.lastName}`;

  const editBtnStyle =
    'px-3.5 py-1.5 rounded-sm hover:bg-gray-exa-3 focus:bg-none transition-colors duration-200 text-sm text-gray-exa-1';

  return (
    <section
      className={cn(
        'lg:sticky top-[140px] lg:max-w-[308px] w-full space-y-10',
        {
          'max-lg:hidden':
            pathname === '/my-profiles/new' ||
            pathname.startsWith('/my-profiles/'),
        }
      )}
    >
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <Avatar className="size-[84px]">
            <AvatarImage src={user.avatar} alt="@shadcn" />
            <AvatarFallback>{toInitials(fullName)}</AvatarFallback>
          </Avatar>

          <Link href="/settings" className={editBtnStyle}>
            <span className="">edit</span>
          </Link>
        </div>

        <h1 className="text-2xl font-light whitespace-nowrap">{fullName}</h1>

        <p className="text-sm text-gray-exa-1">{user.description}</p>

        {!user.description && (
          <p className="text-sm text-gray-exa-2">No description added</p>
        )}
      </div>

      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h3 className="flex items-center gap-3">
            <GraduationCap size={22} className="" strokeWidth={1.8} />
            <span>Education</span>
          </h3>

          <Link href="/my-profiles/education" className={`${editBtnStyle}`}>
            edit
          </Link>
        </div>

        <div className="space-y-5">
          {educations.map((item, index) => {
            return (
              <div key={index} className="space-y-1">
                <h4 className="text-sm font-medium text-gray-exa-1">
                  {item.degree}
                </h4>
                <p className="font-light text-sm text-gray-1">
                  {item.institution} {item.graduationYear}
                </p>
              </div>
            );
          })}
        </div>

        {educations.length === 0 && (
          <div className="flex items-center justify-between">
            <p className="font-light text-sm text-gray-1">
              No education added yet
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
export default UserInfo;
