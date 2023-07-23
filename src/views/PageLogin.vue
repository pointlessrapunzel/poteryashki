<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { login } from '@/services/api/auth';
  import { useAuthStore } from '@/store/user.store';
  import { useRouter } from 'vue-router';
  import { SubmitEventPromise } from 'vuetify';

  const router = useRouter();
  const authStore = useAuthStore();

  const isPassVisible = ref(false);

  const form = reactive({
    email: '',
    password: '',
  });

  const signIn = async (): Promise<void> => {
    authStore.user = await login(form);
    await router.push('/');
  };
</script>

<template>
  <div class="h-100 d-flex align-center justify-center">
    <v-card class="pa-10" max-width="448" width="448">
      <v-card-title class="text-center mb-7">
        <img src="/src/assets/images/logo.svg" alt="Потеряшки" />
      </v-card-title>

      <v-form @submit.prevent="signIn as SubmitEventPromise">
        <v-text-field v-model="form.email" label="Email" variant="outlined" />
        <v-text-field
          v-model="form.password"
          label="Password"
          variant="outlined"
          class="mb-5"
          :type="isPassVisible ? 'text' : 'password'"
          :append-inner-icon="
            isPassVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
          "
          @click:append-inner="isPassVisible = !isPassVisible"
        />

        <v-btn color="success" size="large" type="submit" variant="elevated">
          Войти
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>
