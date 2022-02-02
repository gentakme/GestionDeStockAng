import type { EntityDto } from '@abp/ng.core';
import type { ArticleDto } from '../articles/models';

export interface ClientArticlesDto extends EntityDto<string> {
  articles: ArticleDto[];
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  client: ClientDto;
}

export interface ClientDto extends EntityDto<string> {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface CreateUpdateClientDto extends EntityDto<string> {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  articleIds: string[];
}
