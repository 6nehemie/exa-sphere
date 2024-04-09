import Navbar from '@/components/navigations/Navbar';
import { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Navbar />

      <section className="p-side">{children}</section>
    </main>
  );
};
export default RootLayout;
