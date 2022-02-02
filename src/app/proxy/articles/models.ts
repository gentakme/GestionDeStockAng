import type { EntityDto } from '@abp/ng.core';

export interface ArticleDto extends EntityDto<string> {
  name: string;
  price: number;
  quantity: number;
  count: number;
  dateCommande: string;
  categorieType: string;
}

export interface CreateUpdateArticleDto {
  name: string;
  price: number;
  quantity: number;
  categorieType: string;
}
