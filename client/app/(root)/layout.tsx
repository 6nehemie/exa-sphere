import Navbar from '@/components/navigations/Navbar';
import getUser from '@/utils/actions/user/getUser';
import { ReactNode } from 'react';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getUser();
  console.log('User from Server: ', user);

  return (
    <main>
      <Navbar />

      <section className="p-side">{children}</section>
    </main>
  );
};
export default RootLayout;
