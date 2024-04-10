import SettingsNavigation from '@/components/navigations/SettingsNavigation';
import { ReactNode } from 'react';

const SettingsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" lg:grid grid-cols-4">
      <SettingsNavigation />
      <section className="col-start-2 col-end-5 mb-14">{children}</section>
    </div>
  );
};
export default SettingsLayout;
