'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import auth from '@/utils/functions/auth';
import deleteAuthCookies from '@/utils/functions/deleteAuthCookies';
import { AxiosError } from 'axios';

const logoutAction = async () => {
  const { user } = await auth();

  try {
    // ? Log the user out from the backend
    await noAuthFetch.get('/auth/logout', {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    });

    // ? Delete the cookies & therefore the session
    deleteAuthCookies();
  } catch (error: AxiosError | any) {
    const message = error.response?.data.message || error.message;
    return { error: message };
  }
};

export default logoutAction;
