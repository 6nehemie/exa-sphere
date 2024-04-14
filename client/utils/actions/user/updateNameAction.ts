'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { AxiosError } from 'axios';
import getUserToken from './getUserToken';

interface IUpdateName {
  firstName: string;
  lastName: string;
}

const updateNameAction = async (values: IUpdateName) => {
  const accessToken = await getUserToken();

  try {
    const {
      data: { firstName, lastName },
    } = await noAuthFetch.put(`/user/name`, values, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return { firstName, lastName };
  } catch (error: AxiosError | any) {
    console.error(error);
    const errorMessage = error.response?.data.message || error.message;
    return { error: errorMessage };
  }
};

export default updateNameAction;
