'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { AxiosError } from 'axios';
import getUserToken from '../user/getUserToken';

interface IProfileAction {
  title: string;
  description?: string | undefined;
  skills: string;
  experience1: {
    jobTitle: string;
    company: string;
    location: string;
    startDate: Date;
    endDate?: Date | undefined;
    responsibilities: string;
    achievements?: string | undefined;
  };
  experience2?:
    | {
        jobTitle?: string;
        company?: string;
        location?: string;
        startDate?: Date;
        endDate?: Date;
        responsibilities?: string;
        achievements?: string | undefined;
      }
    | undefined;
  experience3?:
    | {
        jobTitle?: string;
        company?: string;
        location?: string;
        startDate?: Date;
        endDate?: Date;
        responsibilities?: string;
        achievements?: string | undefined;
      }
    | undefined;
  characteristics: string;
}

const postProfileAction = async (values: IProfileAction) => {
  const accessToken = await getUserToken();

  try {
    await noAuthFetch.post(`/profiles`, values, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return null;
  } catch (error: AxiosError | any) {
    const message = error.response.data.message;
    console.error(message);
    return { error: message };
  }
};

export default postProfileAction;
