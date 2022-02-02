import { mapEnumToOptions } from '@abp/ng.core';

export enum CategorieType {
  Informatique = 0,
  Vehicules = 1,
  Immobilier = 2,
}

export const categorieTypeOptions = mapEnumToOptions(CategorieType);
