import UserInfo from '@/components/sections/UserInfo';
import { ReactNode } from 'react';

const ProfilesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="lg:grid grid-cols-3 xl:grid-cols-4 gap-5 max-lg:space-y-8">
      <UserInfo />

      <section className="col-start-2 col-end-4 xl:col-end-5 bg-red-400">
        {children}
      </section>
    </div>
  );
};
export default ProfilesLayout;
