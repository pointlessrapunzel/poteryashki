import { get, remove, post } from '@/services/api/core';
import {
  Animal,
  AnimalBreed,
  AnimalColor,
  AnimalFur,
  AnimalGender,
  AnimalStatus,
  AnimalType,
  CategoryCode,
} from '@/services/api/animal/types';

export const fetchAnimals = async () => get<Animal[]>('/animal');

export const createAnimal = async (data: FormData) => post('/animal', data);
export const deleteAnimal = async (id: number) => remove(`/animal/${id}`);

export const fetchBreeds = async () => get<AnimalBreed[]>('/breed-guide');
export const fetchAnimalTypes = async () =>
  get<AnimalType[]>('/type-animal-guide');
export const fetchFurTypesList = async () => get<AnimalFur[]>('/fur-guide');
export const fetchColorTypesList = async () =>
  get<AnimalColor[]>('/color-guide');
//-----
export const categoryCodeText = (code: CategoryCode) => {
  switch (code) {
    case CategoryCode.NewCat:
      return 'НК';

    case CategoryCode.NewDog:
      return 'НС';

    default:
      return 'Неизвестно';
  }
};

export const CATEGORY_CODES = [
  {
    text: categoryCodeText(CategoryCode.NewCat),
    value: CategoryCode.NewCat,
  },
  {
    text: categoryCodeText(CategoryCode.NewDog),
    value: CategoryCode.NewDog,
  },
];

export const animalGenderText = (gender: AnimalGender) => {
  switch (gender) {
    case AnimalGender.Male:
      return 'Мальчик';

    case AnimalGender.Female:
      return 'Девочка';

    default:
      return 'Неизвестно';
  }
};

export const ANIMAL_GENDERS = [
  {
    text: animalGenderText(AnimalGender.Male),
    value: AnimalGender.Male,
  },
  {
    text: animalGenderText(AnimalGender.Female),
    value: AnimalGender.Female,
  },
];

export const animalStatusText = (status: AnimalStatus) => {
  switch (status) {
    case AnimalStatus.FindingOwner:
      return 'Ищет хозяина';
    case AnimalStatus.Lost:
      return 'Потерян';
    case AnimalStatus.OwnerFound:
      return 'Хозяин найден';
    case AnimalStatus.Quarantine:
      return 'На карантине';
    case AnimalStatus.Check:
      return 'На проверке';
    case AnimalStatus.RainbowRoad:
      return 'В путь по радуге';
    case AnimalStatus.Deleted:
      return 'Удален';
    default:
      return 'Неизвестно';
  }
};

export const ANIMAL_STATUS = [
  {
    text: animalStatusText(AnimalStatus.FindingOwner),
    value: AnimalStatus.FindingOwner,
  },
  {
    text: animalStatusText(AnimalStatus.Lost),
    value: AnimalStatus.Lost,
  },
  {
    text: animalStatusText(AnimalStatus.OwnerFound),
    value: AnimalStatus.OwnerFound,
  },
  {
    text: animalStatusText(AnimalStatus.Quarantine),
    value: AnimalStatus.Quarantine,
  },
  {
    text: animalStatusText(AnimalStatus.Check),
    value: AnimalStatus.Check,
  },
  {
    text: animalStatusText(AnimalStatus.RainbowRoad),
    value: AnimalStatus.RainbowRoad,
  },
  {
    text: animalStatusText(AnimalStatus.Deleted),
    value: AnimalStatus.Deleted,
  },
];
