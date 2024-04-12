import axios from 'axios';
import { cookies } from 'next/headers';

// const accessToken = cookies().get('accessToken');

export const noAuthFetch = axios.create({
  baseURL: process.env.SPRING_API_URL,
});

export const authFetch = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: ('Bearer ' + '[PLUS_TOKEN]') as string,
  },
});
