import Navbar from '@/components/navigations/Navbar';
import getUser from '@/utils/actions/user/getUser';
import { ReactNode } from 'react';
import StoreProvider from '@/providers/StoreProvider';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getUser();
  console.log('User from Server: ', user);

  return (
    <StoreProvider user={user}>
      <main>
        <Navbar />

        <section className="p-side">{children}</section>
      </main>
    </StoreProvider>
  );
};
export default RootLayout;
