import { AxiosError } from 'axios';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { noAuthFetch } from './apis/exaSphereApi';

type AuthUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  accessToken: string;
  expiresIn: number;
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (!email || !password)
          throw new Error('Email and password are required');

        try {
          const response = await noAuthFetch.post('/auth/login', {
            username: email,
            password,
          });

          const data = response.data;
          // console.log(data.user);

          const user = {
            id: data.user.id,
            name: `${data.user.firstName} ${data.user.lastName}`,
            email: data.user.email,
            image: data.user.image,
            accessToken: data.accessToken,
          };

          return user;
        } catch (error: AxiosError | any) {
          const message = error.response?.data.message || error.message;
          console.error(error);
          throw new Error(message);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }: { token: any; user: any }) => {
      if (user) {
        token = { ...token, ...user };
      }
      return token;
    },

    session: async ({
      session,
      token,
      user,
    }: {
      session: any | any;
      token: any;
      user: any;
    }) => {
      session.user.accessToken = token.accessToken;

      return Promise.resolve(session);
    },
  },
  session: {
    strategy: 'jwt',
  },
  debug: process.env.NODE_ENV === 'development',
};
