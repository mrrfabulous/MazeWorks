import type { UserRole } from '../enums';

export type AuthTokens = {
  accessToken: string;
  refreshToken?: string;
};

export type AuthUser = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
};

export type AuthResponse = {
  user: AuthUser;
  tokens: AuthTokens;
};
