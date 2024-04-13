'use server';

import { ISession } from '@/types';
import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { authOptions } from '@/utils/authOption';
import { AxiosError } from 'axios';
import { getServerSession } from 'next-auth';

const isAuth = async () => {
  const session = (await getServerSession(authOptions)) as ISession;
  if (!session) return false;

  try {
    const accessToken = session?.user?.accessToken;
    const { data: user } = await noAuthFetch.get('user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!user) return false;
    else return true;
  } catch (error: AxiosError | any) {
    return false;
  }
};

export default isAuth;
