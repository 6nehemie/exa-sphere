import Navbar from '@/components/navigations/Navbar';
import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { authOptions } from '@/utils/authOption';
import { getServerSession } from 'next-auth';
import { signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/sign-in');

  try {
    const accessToken = session?.user?.accessToken as string;
    const { data: user } = await noAuthFetch.get('user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(user);

    //? set up user globaly
  } catch (error) {
    // await signOut();
    redirect('/sign-in');
  }

  return (
    <main>
      <Navbar />

      <section className="p-side">{children}</section>
    </main>
  );
};
export default RootLayout;
