'use server';

import { ISession } from '@/types';
import { authOptions } from '@/utils/authOption';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const getUserToken = async () => {
  const session = (await getServerSession(authOptions)) as ISession;
  if (!session) return redirect('/sign-in');

  return session?.user?.accessToken;
};

export default getUserToken;
