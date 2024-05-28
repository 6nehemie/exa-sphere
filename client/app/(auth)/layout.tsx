import Logo from '@/components/icons/Logo';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { auth } from '@/constants';
import isAuth from '@/utils/functions/isAuth';
import { redirect } from 'next/navigation';

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  if (await isAuth()) {
    return redirect('/my-profiles');
  }

  const boxStyle = 'py-6 px-6 lg:px-8 xl:px-10';
  return (
    <main className="min-h-screen h-full">
      <div
        className={cn(
          'grid lg:grid-cols-2 min-h-screen h-full w-screen bg-gray-exa-6 text-white'
        )}
      >
        <div
          className={cn(
            `${boxStyle} flex flex-col justify-between max-lg:hidden bg-gray-exa-5`
          )}
        >
          <Logo />

          <div className="mt-8">
            <p className="lg:text-base xl:text-lg font-light">
              {auth.testimonial}
            </p>
            <p className="text-sm font-light text-gray-1 mt-2">
              - {auth.author}
            </p>
          </div>
        </div>

        <div className={cn(`${boxStyle} relative`)}>
          <div className="lg:hidden">
            <Logo text="max-sm:hidden" />
          </div>

          {children}
        </div>
      </div>
    </main>
  );
};
export default AuthLayout;
