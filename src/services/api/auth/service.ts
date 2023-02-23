import { LoginRequest } from './types';
import { post } from '@/services/api/core';
import { User } from '@/services/api/user';

export const login = async (data: LoginRequest): Promise<User> =>
  post<User>('/auth', data);
