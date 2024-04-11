import ProfileTracking from '@/components/navigations/ProfileTracking';
import UserInfo from '@/components/sections/UserInfo';
import { ReactNode } from 'react';
import { userInfo } from '@/constants/index';

const ProfilesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="lg:grid grid-cols-3 xl:grid-cols-4 gap-5 max-lg:space-y-8">
      <div className="relative">
        <UserInfo user={userInfo} />
      </div>

      <section className="col-start-2 col-end-4 xl:col-end-5 space-y-7 pb-[64px]">
        <ProfileTracking />
        {children}
      </section>
    </div>
  );
};
export default ProfilesLayout;
