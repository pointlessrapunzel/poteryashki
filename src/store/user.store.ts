import { defineStore } from 'pinia';
import { User } from '@/services/api/user';
interface UserState {
  user: User | null;
}
export const useAuthStore = defineStore('auth', {
  state: (): UserState => ({
    user: null,
  }),
});
