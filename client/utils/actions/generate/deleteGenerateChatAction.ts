'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import getUserToken from '../user/getUserToken';
import { AxiosError } from 'axios';

const deleteGenerateChatAction = async (chatId: number) => {
  const accessToken = await getUserToken();

  try {
    const response = await noAuthFetch.delete(`/generates/${chatId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data as string;
  } catch (error: AxiosError | any) {
    const message = error.response.data.message;
    console.error(message);
    return { error: message };
  }
};

export default deleteGenerateChatAction;
