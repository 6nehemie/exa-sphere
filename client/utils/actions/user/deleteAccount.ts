'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { AxiosError } from 'axios';
import getUserToken from './getUserToken';
import deleteAuthCookies from '@/utils/functions/deleteAuthCookies';
import { redirect } from 'next/navigation';

const deleteAccount = async () => {
  const accessToken = await getUserToken();

  try {
    await noAuthFetch.delete(`/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    deleteAuthCookies();
    redirect('/sign-in');
  } catch (error: AxiosError | any) {
    console.error(error);
    const errorMessage = error.response?.data.message || error.message;
  }
};

export default deleteAccount;
