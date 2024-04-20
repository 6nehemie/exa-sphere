'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { AxiosError } from 'axios';
import getUserToken from '../user/getUserToken';

const getAllProfilesAction = async () => {
  const accessToken = await getUserToken();

  try {
    const { data } = await noAuthFetch.get(`/profiles`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(data);
    return data;
  } catch (error: AxiosError | any) {
    const message = error.response.data.message;
    console.error(message);
    return [];
  }
};

export default getAllProfilesAction;
