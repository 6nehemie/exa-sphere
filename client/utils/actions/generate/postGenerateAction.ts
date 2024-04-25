'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import getUserToken from '../user/getUserToken';
import { AxiosError } from 'axios';
import { IEducationAction } from '@/types';

interface Generate {
  jobTitle: string;
  company: string;
  location: string;
  jobType: string;
  experienceLevel: string;
  profileId: number | string;
  description: string;
}

const postGenerateAction = async (values: Generate) => {
  const accessToken = await getUserToken();

  const request = {
    ...values,
    profileId: Number(values.profileId),
    description: JSON.stringify(values.description),
  };

  try {
    const response = await noAuthFetch.post(`/generates`, request, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error: AxiosError | any) {
    const message = error.response.data.message;
    console.error(message);
    return { error: message };
  }
};

export default postGenerateAction;
