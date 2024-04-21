'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import getUserToken from '../user/getUserToken';
import { AxiosError } from 'axios';
import { IEducationAction } from '@/types';

const getEducationsAction = async () => {
  const accessToken = await getUserToken();

  try {
    const response = await noAuthFetch.get(`/educations`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // return graduationYear as string for the input field
    return response.data.map((education: IEducationAction) => {
      return { ...education, graduationYear: String(education.graduationYear) };
    }) as IEducationAction[];
  } catch (error: AxiosError | any) {
    const message = error.response.data.message;
    console.error(message);
    return { error: message };
  }
};

export default getEducationsAction;
