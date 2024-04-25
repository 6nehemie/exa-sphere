import axios from 'axios';

export const noAuthFetch = axios.create({
  baseURL: process.env.SPRING_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': process.env.SERVER_API_KEY,
  },
});

export const authFetch = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: ('Bearer ' + '[PLUS_TOKEN]') as string,
  },
});
