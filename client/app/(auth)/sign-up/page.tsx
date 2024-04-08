import GoogleBtn from '@/components/buttons/GoogleBtn';
import SingUpForm from '@/components/forms/SingUpForm';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const SignUp = () => {
  return (
    <div className={cn('flex items-center justify-center h-full w-full')}>
      <Link
        href={'/sign-in'}
        className="absolute top-6 right-6 lg:right-8 xl:right-10 font-light"
      >
        Login
      </Link>

      <div className="max-w-[405px] w-full space-y-4">
        <SingUpForm />

        <div className="flex items-center w-full gap-4">
          <div className="h-[1px] w-full bg-gray-2" />
          <div className="font-light text-gray-1 text-xs">OR</div>
          <div className="h-[1px] w-full bg-gray-2" />
        </div>

        <GoogleBtn />

        <p className="text-sm text-gray-1 font-light text-center">
          By clicking continue, you agree to our{' '}
          <Link href={'/'} target="_black" className="underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href={'/'} target="_black" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
};
export default SignUp;
