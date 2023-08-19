type TypeId = number;
type BreedId = number;
type FurId = number;
type ColorId = number;
type CuratorId = number;
export enum AnimalStatus {
  FindingOwner,
  Lost,
  OwnerFound,
  Quarantine,
  Check,
  RainbowRoad,
  Deleted,
}

export interface AnimalType {
  id: number;
  value: string;
}

export interface AnimalBreed {
  id: number;
  value: string;
  typeAnimal: AnimalType;
}
export interface AnimalFur {
  id: number;
  value: string;
  typeAnimal: AnimalType;
}
export interface AnimalColor {
  id: number;
  value: string;
  typeAnimal: AnimalType;
}

export enum CategoryCode {
  NewCat,
  NewDog,
}
export enum AnimalGender {
  Male,
  Female,
}
interface AnimalPhoto {
  id: string;
  originalName: string;
  path: string;
}
export interface Animal {
  readonly id: number;
  readonly categoryCode: CategoryCode;
  readonly userCode: string;
  readonly typeAnimal: TypeId;
  readonly name: string;
  readonly gender: AnimalGender;
  readonly birthdate: Date;
  readonly breed: BreedId;
  readonly fur: FurId;
  readonly color: ColorId;
  readonly status: AnimalStatus;
  readonly placeDiscovery?: string;
  readonly dateDiscovery?: string;
  readonly specialFeatures?: string;
  readonly furtherInformation?: string;
  readonly isOverexposure: boolean;
  readonly photos?: AnimalPhoto[];
  readonly curator?: CuratorId;
}
