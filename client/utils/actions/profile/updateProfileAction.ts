'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { AxiosError } from 'axios';
import getUserToken from '../user/getUserToken';
interface Experience {
  jobTitle: string;
  company: string;
  location: string;
  startDate: Date;
  endDate?: Date | undefined;
  responsibilities: string;
  achievements?: string | undefined;
}

interface IProfileAction {
  id: number;
  title: string;
  description?: string | undefined;
  skills: string;
  experiences: Experience[];
  characteristics: string;
}

const updateProfileAction = async (values: IProfileAction) => {
  const accessToken = await getUserToken();

  // values = {id: profileId };

  try {
    await noAuthFetch.put(`/profiles`, values, {
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

export default updateProfileAction;
