'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { AxiosError } from 'axios';
import getUserToken from './getUserToken';
import deleteAuthCookies from '@/utils/functions/deleteAuthCookies';

interface IUpdateEmail {
  email: string;
  password: string;
}

const updateEmailAction = async (values: IUpdateEmail) => {
  const accessToken = await getUserToken();

  try {
    await noAuthFetch.put(`/user/email`, values, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // ? Delete the cookies & therefore log the user out
    deleteAuthCookies();

    return;
  } catch (error: AxiosError | any) {
    console.error(error);
    const errorMessage = error.response?.data.message || error.message;
    return { error: errorMessage };
  }
};

export default updateEmailAction;
