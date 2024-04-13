import nextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    id: string;
    avatar: string;
    firstName: string;
    lastName: string;
    email: string;
    accessToken: string;
  }

  interface User {
    name: string;
    email: string;
    image: string;
    accessToken: string;
  }
}
