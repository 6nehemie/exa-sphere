'use client';

import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

const GoogleBtn = () => {
  return (
    <Button
      type="submit"
      onClick={() => signIn('google')}
      className={cn(
        'w-full bg-gray-3 border border-gray-2 text-white hover:bg-gray-2 font-normal'
      )}
    >
      <FaGoogle className="mr-2" />
      <span>Google</span>
    </Button>
  );
};
export default GoogleBtn;
