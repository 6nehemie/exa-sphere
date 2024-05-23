import UserInfo from '@/components/sections/UserInfo';
import { Education } from '@/types';
import getEducationsAction from '@/utils/actions/education/getEducationsAction';
import { ReactNode } from 'react';

const ProfilesLayout = async ({ children }: { children: ReactNode }) => {
  const educations = (await getEducationsAction()) as Education[];

  return (
    <div className="lg:grid grid-cols-3 xl:grid-cols-4 gap-20 max-lg:space-y-20">
      <div className="relative">
        <UserInfo educations={educations} />
      </div>

      <section className="col-start-2 col-end-4 xl:col-end-5 space-y-7 pb-[64px]">
        {children}
      </section>
    </div>
  );
};
export default ProfilesLayout;
