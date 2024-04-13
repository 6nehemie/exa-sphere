'use server';

import getUser from '../actions/user/getUser';

const isOauth = async () => {
  const user = await getUser();

  if (user.authType === 'OAUTH') return true;
  else return false;
};

export default isOauth;
