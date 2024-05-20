import Navbar from '@/components/navigations/Navbar';
import getUser from '@/utils/actions/user/getUser';
import { ReactNode } from 'react';
import StoreProvider from '@/providers/StoreProvider';
import { OTP } from '@/components/sections/OTP';
import SideBar from '@/components/navigations/SideBar';
import SidebarTrigger from '@/components/navigations/SidebarTrigger';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getUser();

  return (
    <StoreProvider user={user}>
      <main className="w-screen">
        <SidebarTrigger />

        <div className="flex">
          <SideBar />

          {/* <OTP /> */}

          <div className="w-full">
            <Navbar />

            <section className="p-side w-full">{children}</section>
          </div>
        </div>
      </main>
    </StoreProvider>
  );
};
export default RootLayout;
