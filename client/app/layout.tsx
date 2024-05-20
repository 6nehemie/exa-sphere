import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import SessionProvider from '@/providers/SessionProvider';
import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Exa Sphere',
  description:
    'Generate tailored cover letters instantly by creating job profiles. Save profiles in-app for quick access, ensuring seamless crafting of professional cover letters for every opportunity.',
  icons: {
    icon: '/exa-icon.png', // /public path
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={cn('bg-gray-exa-6 text-white', roboto.className)}>
          {children}
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
