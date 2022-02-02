import type { ClientDto, CreateUpdateClientDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  apiName = 'Default';

  assignArticlesByClientIdAndArticleIds = (clientId: string, articleIds: string[]) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/client/assignArticles/${clientId}`,
      body: articleIds,
    },
    { apiName: this.apiName });

  create = (input: CreateUpdateClientDto) =>
    this.restService.request<any, ClientDto>({
      method: 'POST',
      url: '/api/app/client',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/client/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, ClientDto>({
      method: 'GET',
      url: `/api/app/client/${id}`,
    },
    { apiName: this.apiName });

  getCommandeByClientById = (id: string) =>
    this.restService.request<any, boolean>({
      method: 'GET',
      url: `/api/app/client/${id}/commandeByClient`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<ClientDto>>({
      method: 'GET',
      url: '/api/app/client',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateClientDto) =>
    this.restService.request<any, ClientDto>({
      method: 'PUT',
      url: `/api/app/client/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
