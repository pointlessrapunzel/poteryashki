// Utilities
import { defineStore } from 'pinia';
import { User } from '@/services/api/user';

interface AuthState {
  user: User | null;
}
export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
  }),
});
