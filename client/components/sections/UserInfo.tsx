import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

import { UserCog, GraduationCap } from 'lucide-react';
import { userInfo } from '@/constants/index';
import toInitials from '@/utils/functions/toInitials';

const UserInfo = () => {
  const editBtnStyle =
    'px-2 py-0.5 rounded-sm hover:bg-gray-2 focus:bg-none transition-colors duration-200';

  return (
    <section className="lg:max-w-[308px] w-full space-y-8">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <Avatar className="size-[84px]">
            <AvatarImage src="/avatar.png" alt="@shadcn" />
            <AvatarFallback>{toInitials(userInfo.fullName)}</AvatarFallback>
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

        <h1 className="text-3xl font-light">{userInfo.fullName}</h1>
        <p className="text-sm font-light text-gray-1">{userInfo.description}</p>
      </div>

      {/* <div className="space-y-4">
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

        {userInfo.education.map((item, index) => {
          return (
            <div key={index}>
              <h4 className="font-light text-sm text-white">{item.degree}</h4>
              <p className="font-light text-sm text-gray-1">
                {item.school} {item.graduationYear}
              </p>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};
export default UserInfo;
