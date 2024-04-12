import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions, Session, User } from 'next-auth';
import axios from 'axios';
import { cookies } from 'next/headers';
import { JWT } from 'next-auth/jwt';

type AuthResponse = {
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

        return null;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,

  debug: process.env.NODE_ENV === 'development',
};
