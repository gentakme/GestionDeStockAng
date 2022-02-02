import type { ClientDto } from '../clients/models';
import type { EntityDto } from '@abp/ng.core';

export interface ClientCommandesDto {
  client: ClientDto;
  count: number;
  articles: CommandeArticlesDto[];
  articlesId: string[];
}

export interface CommandeArticlesDto extends EntityDto<string> {
  name: string;
  price: number;
  quantity: number;
  count: number;
  dateCommande: string;
  categorieType: string;
}

export interface CommandeDto extends EntityDto<string> {
  articleId: string;
  articleName: string;
  dateCommande: string;
  client: ClientDto;
  quantity: number;
}

export interface CreateUpdateCommandeDto {
  articleId: string;
}
