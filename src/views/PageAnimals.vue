<script lang="ts" setup>
  import { onBeforeMount, ref } from 'vue';
  import { Header } from 'vue3-easy-data-table';
  import { getAge } from '@/common/helpers';
  import {
    animalGenderText,
    animalStatusText,
    categoryCodeText,
    deleteAnimal,
    fetchAnimals,
  } from '@/services/api/animal/services';
  import { Animal } from '@/services/api/animal';
  import AnimalModal from '@/modules/animal/components/AnimalModal.vue';

  const headers: Header[] = [
    { text: 'Код', value: 'categoryCode' },
    { text: 'Польз-ий код', value: 'userCode' },
    { text: 'Кличка', value: 'name' },
    { text: 'Пол', value: 'gender' },
    { text: 'Возраст', value: 'birthdate' },
    { text: 'Порода', value: 'breed.value' },
    { text: 'Шерсть', value: 'fur.value' },
    { text: 'Окрас', value: 'color.value' },
    { text: 'Статус', value: 'status' },
    { text: 'Имя куратора', value: 'curator.lastName' },
    { text: 'Тел куратора', value: 'curator.phone' },
    { text: 'Действия', value: 'actions' },
  ];

  const animals = ref<Animal[]>([]);
  const isModalOpen = ref(false);
  const isLoading = ref(false);

  onBeforeMount(async () => {
    animals.value = await fetchAnimals();
  });

  async function createAnimal() {
    // createAnimal
    isModalOpen.value = true;
  }
  async function onSuccess() {
    console.log('ONSUCCESS');
    isModalOpen.value = false;
    isLoading.value = true;
    animals.value = await fetchAnimals();
    isLoading.value = false;
  }
  async function onDelete(animal: Animal) {
    await deleteAnimal(animal.id);
  }
</script>

<template>
  <v-container>
    <v-btn class="mb-4" @click="createAnimal">Добавить животное</v-btn>
    <easy-date-table
      class="table-animals"
      border-cell
      :headers="headers"
      :items="animals"
      :loading="isLoading"
    >
      <template #item-categoryCode="{ categoryCode }">
        {{ categoryCodeText(categoryCode) }}
      </template>
      <template #item-gender="{ gender }">
        {{ animalGenderText(gender) }}
      </template>
      <template #item-birthdate="{ birthdate }">
        {{ getAge(birthdate) }}
      </template>
      <template #item-status="{ status }">
        {{ animalStatusText(status) }}
      </template>
      <template #item-actions="item">
        <button @click="onDelete(item)">Действия</button>
      </template>
    </easy-date-table>

    <animal-modal
      v-if="isModalOpen"
      @success="onSuccess"
      @close="isModalOpen = false"
    />
  </v-container>
</template>

<style lang="scss">
  .table-animals .vue3-easy-data-table__main {
    overflow: hidden;
  }
</style>
