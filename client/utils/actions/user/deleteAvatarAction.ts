'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { AxiosError } from 'axios';
import getUserToken from './getUserToken';

const deleteAvatarAction = async () => {
  const accessToken = await getUserToken();

  try {
    const {
      data: { avatarUrl },
    } = await noAuthFetch.delete(`/user/avatar`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return { avatar: avatarUrl };
  } catch (error: AxiosError | any) {
    console.error(error);
    const errorMessage = error.response?.data.message || error.message;
    return { error: errorMessage };
  }
};

export default deleteAvatarAction;
