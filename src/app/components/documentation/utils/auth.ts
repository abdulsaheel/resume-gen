// utils/auth.ts

import { parseCookies } from 'nookies';

export const isLoggedIn = (): boolean => {
  const cookies = parseCookies();
  const token = cookies.token;

  return !!token; // Returns true if the token is present
};
