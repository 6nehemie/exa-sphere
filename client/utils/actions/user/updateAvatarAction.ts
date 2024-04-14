'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { AxiosError } from 'axios';
import getUserToken from './getUserToken';

const updateAvatarAction = async (avatar: FormData) => {
  const accessToken = await getUserToken();

  try {
    const {
      data: { avatarUrl },
    } = await noAuthFetch.put(`/user/avatar`, avatar, {
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

export default updateAvatarAction;
