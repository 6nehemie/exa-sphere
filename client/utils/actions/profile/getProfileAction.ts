'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { AxiosError } from 'axios';
import getUserToken from '../user/getUserToken';

const getProfileAction = async (profileId: number | string) => {
  const accessToken = await getUserToken();

  try {
    const { data } = await noAuthFetch.get(`/profiles/${profileId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return data;
  } catch (error: AxiosError | any) {
    const message = error.response.data.message;
    console.error(message);
    return { error: message };
  }
};

export default getProfileAction;
