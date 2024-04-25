'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import getUserToken from '../user/getUserToken';
import { AxiosError } from 'axios';
import { Generate } from '@/types';

const getAllGenerateAction = async () => {
  const accessToken = await getUserToken();

  try {
    const response = await noAuthFetch.get(`/generates`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data as Generate[];
  } catch (error: AxiosError | any) {
    const message = error.response.data.message;
    console.error(message);
    return { error: message };
  }
};

export default getAllGenerateAction;
