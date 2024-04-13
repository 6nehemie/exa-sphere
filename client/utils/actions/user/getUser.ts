'use server';

import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { authOptions } from '@/utils/authOption';
import { ISession } from '@/types';

const getUser = async () => {
  const session = (await getServerSession(authOptions)) as ISession;
  if (!session) return redirect('/sign-in');

  try {
    const accessToken = session?.user?.accessToken;
    const { data: user } = await noAuthFetch.get('user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!user) return redirect('/sign-in');

    return user;
  } catch (error) {
    redirect('/sign-in');
  }
};

export default getUser;
