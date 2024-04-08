import GoogleBtn from '@/components/buttons/GoogleBtn';
import SignInForm from '@/components/forms/SignInForm';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const SignIn = () => {
  return (
    <div className={cn('flex items-center justify-center h-full w-full')}>
      <Link
        href={'/sign-up'}
        className="absolute top-6 right-6 lg:right-8 xl:right-10 font-light"
      >
        Register
      </Link>

      <div className="max-w-[405px] w-full space-y-4">
        <SignInForm />

        <div className="flex items-center w-full gap-4">
          <div className="h-[1px] w-full bg-gray-2" />
          <div className="font-light text-gray-1 text-xs">OR</div>
          <div className="h-[1px] w-full bg-gray-2" />
        </div>

        <GoogleBtn />
      </div>
    </div>
  );
};
export default SignIn;
