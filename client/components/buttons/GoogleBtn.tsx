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
        'w-full bg-inherit h-12 rounded-xl border border-gray-2 text-white hover:bg-gray-exa-3 font-normal'
      )}
    >
      <FaGoogle className="mr-2" />
      <span>Google</span>
    </Button>
  );
};
export default GoogleBtn;
