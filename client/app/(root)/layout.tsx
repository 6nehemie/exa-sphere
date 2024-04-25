import Navbar from '@/components/navigations/Navbar';
import getUser from '@/utils/actions/user/getUser';
import { ReactNode } from 'react';
import StoreProvider from '@/providers/StoreProvider';
import { OTP } from '@/components/sections/OTP';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getUser();

  return (
    <StoreProvider user={user}>
      <main>
        <Navbar />
        {/* <OTP /> */}

        <section className="p-side">{children}</section>
      </main>
    </StoreProvider>
  );
};
export default RootLayout;
