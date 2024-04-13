import { cookies } from 'next/headers';

const deleteAuthCookies = () => {
  cookies().delete('next-auth.session-token');
  cookies().delete('next-auth.callback-url');
  cookies().delete('next-auth.csrf-token');
};

export default deleteAuthCookies;
