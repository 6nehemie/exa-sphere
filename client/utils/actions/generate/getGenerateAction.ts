'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import getUserToken from '../user/getUserToken';
import { AxiosError } from 'axios';
import { Generate } from '@/types';

const getGenerateAction = async (generateId: number) => {
  const accessToken = await getUserToken();

  try {
    const response = await noAuthFetch.get(`/generates/${generateId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data as Generate;
  } catch (error: AxiosError | any) {
    const message = error.response.data.message;
    console.error(message);
    return { error: message };
  }
};

export default getGenerateAction;
