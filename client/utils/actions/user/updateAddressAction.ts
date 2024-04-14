'use server';

import { noAuthFetch } from '@/utils/apis/exaSphereApi';
import { AxiosError } from 'axios';
import getUserToken from './getUserToken';

interface IUpdateAddress {
  street: string;
  city: string;
  zip: string;
  state: string;
  country: string;
}

const updateAddressAction = async (values: IUpdateAddress) => {
  const accessToken = await getUserToken();

  try {
    const {
      data: { address },
    } = await noAuthFetch.put(`/user/address`, values, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log(address);

    return { address };
  } catch (error: AxiosError | any) {
    console.error(error);
    const errorMessage = error.response?.data.message || error.message;
    return { error: errorMessage };
  }
};

export default updateAddressAction;
