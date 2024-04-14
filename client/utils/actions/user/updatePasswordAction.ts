'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { AxiosError } from 'axios';
import getUserToken from './getUserToken';
import deleteAuthCookies from '@/utils/functions/deleteAuthCookies';

interface IUpdatePassword {
  password: string;
  newPassword: string;
}

const updatePasswordAction = async (values: IUpdatePassword) => {
  const accessToken = await getUserToken();

  const { password, newPassword } = values;
  const data = { password, newPassword };

  try {
    await noAuthFetch.put(`/user/password`, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return;
  } catch (error: AxiosError | any) {
    console.error(error);
    const errorMessage = error.response?.data.message || error.message;
    return { error: errorMessage };
  }
};

export default updatePasswordAction;
