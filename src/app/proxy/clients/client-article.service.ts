import type { ClientArticlesDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientArticleService {
  apiName = 'Default';

  create = (input: ClientArticlesDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/clientArticle',
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
