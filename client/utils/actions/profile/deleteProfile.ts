'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { AxiosError } from 'axios';
import getUserToken from '../user/getUserToken';

const deleteProfile = async (profileId: number | string) => {
  const accessToken = await getUserToken();

  try {
    await noAuthFetch.delete(`/profiles/${profileId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error: AxiosError | any) {
    return { error: error };
  }
};

export default deleteProfile;
