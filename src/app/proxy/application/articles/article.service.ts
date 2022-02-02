import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ArticleDto, CreateUpdateArticleDto } from '../../articles/models';
import type { CategorieType } from '../../enums/categorie-type.enum';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  apiName = 'Default';

  create = (input: CreateUpdateArticleDto) =>
    this.restService.request<any, ArticleDto>({
      method: 'POST',
      url: '/api/app/article',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/article/${id}`,
    },
    { apiName: this.apiName });

  deleteList = (ids: string[]) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/article/list',
      params: { ids },
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, ArticleDto>({
      method: 'GET',
      url: `/api/app/article/${id}`,
    },
    { apiName: this.apiName });

  getArticlesList = () =>
    this.restService.request<any, PagedResultDto<ArticleDto>>({
      method: 'GET',
      url: '/api/app/article/articlesList',
    },
    { apiName: this.apiName });

  getByCategorieByType = (type: CategorieType) =>
    this.restService.request<any, PagedResultDto<ArticleDto>>({
      method: 'GET',
      url: '/api/app/article/byCategorie',
      params: { type },
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<ArticleDto>>({
      method: 'GET',
      url: '/api/app/article',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  insertArticles = (articles: ArticleDto[]) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/article/articles',
      body: articles,
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateArticleDto) =>
    this.restService.request<any, ArticleDto>({
      method: 'PUT',
      url: `/api/app/article/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
