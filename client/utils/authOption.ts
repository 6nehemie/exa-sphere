import { Axios, AxiosError } from 'axios';
import { Account, NextAuthOptions, Profile, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { noAuthFetch } from './apis/exaSphereApi';
import { AdapterUser } from 'next-auth/adapters';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
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
            image: data.user.image || '',
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
    signIn: async ({
      user,
      account,
      profile,
    }: {
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile | any | undefined;
    }) => {
      if (profile && !profile.email) {
        throw new Error('No email found');
      }

      try {
        const response = await noAuthFetch.post('/auth/oauth', {
          firstName: profile?.given_name,
          lastName: profile?.family_name,
          email: user.email,
          avatar: user.image,
          provider: {
            provider: account?.provider,
            type: account?.type,
            issuedUrl: profile?.iss,
          },
        });

        const { data: responseUser } = response;
        user.accessToken = responseUser.accessToken;

        return true;
      } catch (error: AxiosError | any) {
        console.error(error);
        return false;
      }
    },
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
