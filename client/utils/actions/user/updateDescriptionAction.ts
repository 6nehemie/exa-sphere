'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { AxiosError } from 'axios';
import getUserToken from './getUserToken';

interface IUpdateName {
  description?: string | undefined;
}

const updateDescriptionAction = async (values: IUpdateName) => {
  const accessToken = await getUserToken();

  try {
    const {
      data: { description },
    } = await noAuthFetch.put(`/user/description`, values, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return { description };
  } catch (error: AxiosError | any) {
    console.error(error);
    const errorMessage = error.response?.data.message || error.message;
    return { error: errorMessage };
  }
};

export default updateDescriptionAction;
