'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { AxiosError } from 'axios';

interface IRegisterAction {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const registerAction = async (values: IRegisterAction) => {
  const { firstName, lastName, email, password } = values;

  try {
    await noAuthFetch.post('/auth/register', {
      firstName,
      lastName,
      email,
      password,
    });
  } catch (error: AxiosError | any) {
    console.error(error);
    return { error: error.response.data.message || error };
  }

  return 'registerAction';
};

export default registerAction;
