'use server';

import { ISession } from '@/types';
import { getServerSession } from 'next-auth';
import { authOptions } from '../authOption';
import { redirect } from 'next/navigation';

const auth = async () => {
  const session = (await getServerSession(authOptions)) as ISession;

  if (!session) {
    return redirect('/sign-in');
  }

  return session;
};

export default auth;
