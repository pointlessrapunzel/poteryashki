<script setup lang="ts">
  import { computed, onMounted, reactive, ref, watch } from 'vue';
  import {
    ANIMAL_GENDERS,
    ANIMAL_STATUS,
    AnimalStatus,
    fetchAnimalTypes,
    fetchBreeds,
    AnimalBreed,
    AnimalType,
    fetchFurTypesList,
    fetchColorTypesList,
    AnimalColor,
    createAnimal,
    CategoryCode,
  } from '@/services/api/animal';

  const emits = defineEmits(['close', 'success']);

  const isDialogOpen = ref(true);
  const createAnimalForm = ref<HTMLFormElement | null>(null);

  const form = reactive({
    name: '',
    gender: '',
    birthdate: '2021-11-26',
    typeAnimal: null as number | null,
    breed: null as number | null,
    fur: null as number | null,
    color: null as number | null,
    status: AnimalStatus.Quarantine,
    curator: '1',
    photos: [] as File[],
  });
  function cancel() {
    if (createAnimalForm.value) {
      createAnimalForm.value.reset();
      form.status = AnimalStatus.Quarantine;
    }

    emits('close');
  }

  const animalTypesList = ref<AnimalType[]>([]);
  const breedsList = ref<AnimalBreed[]>([]);
  const furTypesList = ref<AnimalBreed[]>([]);
  const colorTypesList = ref<AnimalColor[]>([]);

  const filteredBreeds = computed(() =>
    form.typeAnimal
      ? breedsList.value.filter(
          (breed) => form.typeAnimal === breed.typeAnimal.id
        )
      : breedsList.value
  );

  const onCreateAnimal = async () => {
    const data = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (key === 'photos' && Array.isArray(value)) {
        value.forEach((photo: File) => {
          data.append(key, photo);
        });
      } else if (value !== null) {
        data.append(key, value.toString());
      }
    });

    if (form.typeAnimal === CategoryCode.NewDog) {
      data.append('categoryCode', CategoryCode.NewDog.toString());
    } else {
      data.append('categoryCode', CategoryCode.NewCat.toString());
    }

    try {
      await createAnimal(data);
      emits('success');
    } catch (e) {
      console.log(e);
    }
  };

  onMounted(async () => {
    const [animalTypes, furTypes, colorTypes, allBreeds] = await Promise.all([
      fetchAnimalTypes(),
      fetchFurTypesList(),
      fetchColorTypesList(),
      fetchBreeds(),
    ]);

    animalTypesList.value = animalTypes;
    furTypesList.value = furTypes;
    colorTypesList.value = colorTypes;
    breedsList.value = allBreeds;
  });
  watch(
    () => form.typeAnimal,
    () => (form.breed = null)
  );
</script>

<template>
  <v-dialog v-model="isDialogOpen" width="700" class="modal">
    <v-card>
      <v-card-title class="pl-7 pt-7">Создание карточки животного</v-card-title>
      <v-card-text>
        <v-form ref="createAnimalForm" class="modal__form">
          <v-text-field v-model="form.name" name="name" label="Кличка" />
          <v-select
            v-model="form.gender"
            :items="ANIMAL_GENDERS"
            item-title="text"
            item-value="value"
            name="gender"
            label="Пол"
          />
          <VueDatePicker
            v-model="form.birthdate"
            utc
            :enable-time-picker="false"
          />
          <v-select
            v-model="form.typeAnimal"
            :items="animalTypesList"
            item-title="value"
            item-value="id"
            name="typeAnimal"
            label="Тип животного"
          />
          <v-select
            v-model="form.breed"
            :items="filteredBreeds"
            item-title="value"
            item-value="id"
            name="breed"
            label="Порода"
          />
          <v-select
            v-model="form.fur"
            :items="furTypesList"
            item-title="value"
            item-value="id"
            name="fur"
            label="Тип шерсти"
          />
          <v-select
            v-model="form.color"
            :items="colorTypesList"
            item-title="value"
            item-value="id"
            name="color"
            label="Окрас"
          />
          <v-select
            v-model="form.status"
            :items="ANIMAL_STATUS"
            item-title="text"
            item-value="value"
            name="status"
            label="Статус"
          />
          <v-select v-model="form.curator" name="curator" label="Куратор" />
          <v-file-input v-model="form.photos" name="photos" label="Фото" />
        </v-form>
      </v-card-text>
      <v-card-actions class="pr-7">
        <v-btn class="ml-auto" @click="cancel">Отмена</v-btn>
        <v-btn @click="onCreateAnimal">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss">
  .modal__form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
</style>
