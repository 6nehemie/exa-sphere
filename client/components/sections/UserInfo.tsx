'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

import toInitials from '@/utils/functions/toInitials';
import { GraduationCap, UserCog } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks';
import { educationBis, userInfo } from '@/constants';

const UserInfo = () => {
  const pathname = usePathname();
  const user = useAppSelector((state) => state.user);
  const fullName = `${user.firstName} ${user.lastName}`;

  const editBtnStyle =
    'px-2 py-0.5 rounded-sm hover:bg-gray-2 focus:bg-none transition-colors duration-200';

  return (
    <section
      className={cn('lg:sticky top-[140px] lg:max-w-[308px] w-full space-y-8', {
        'max-lg:hidden':
          pathname === '/my-profiles/new' ||
          pathname.startsWith('/my-profiles/'),
      })}
    >
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <Avatar className="size-[84px]">
            <AvatarImage src={user.avatar} alt="@shadcn" />
            <AvatarFallback>{toInitials(fullName)}</AvatarFallback>
          </Avatar>

          <Link href="/settings" className={editBtnStyle}>
            <UserCog
              size={16}
              className="inline-block mr-2"
              strokeWidth={1.4}
            />
            <span className="text-sm font-light">edit</span>
          </Link>
        </div>

        <h1 className="text-3xl font-light">{fullName}</h1>
        <p className="text-sm font-light text-gray-1">{user.description}</p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="flex items-center gap-2">
            <GraduationCap size={20} className="" strokeWidth={1.4} />
            <span>Education</span>
          </h3>

          <Link
            href="/my-profiles/education"
            className={`${editBtnStyle} text-sm font-light`}
          >
            edit
          </Link>
        </div>

        {educationBis.map((item, index) => {
          return (
            <div key={index}>
              <h4 className="font-light text-sm text-white">{item.degree}</h4>
              <p className="font-light text-sm text-gray-1">
                {item.institution} {item.graduationYear}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default UserInfo;
