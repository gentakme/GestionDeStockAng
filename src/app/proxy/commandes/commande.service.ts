import type { ClientCommandesDto, CommandeDto, CreateUpdateCommandeDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  apiName = 'Default';

  create = (input: CreateUpdateCommandeDto) =>
    this.restService.request<any, CommandeDto>({
      method: 'POST',
      url: '/api/app/commande',
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/commande/${id}`,
    },
    { apiName: this.apiName });

  deleteList = (ids: string[]) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: '/api/app/commande/list',
      params: { ids },
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, CommandeDto>({
      method: 'GET',
      url: `/api/app/commande/${id}`,
    },
    { apiName: this.apiName });

  getCommandeByArticleById = (id: string) =>
    this.restService.request<any, CommandeDto>({
      method: 'GET',
      url: `/api/app/commande/commandeByArticle/${id}`,
    },
    { apiName: this.apiName });

  getCommandeByClientById = (id: string) =>
    this.restService.request<any, CommandeDto>({
      method: 'GET',
      url: `/api/app/commande/${id}/commandeByClient`,
    },
    { apiName: this.apiName });

  getList = (input: PagedAndSortedResultRequestDto) =>
    this.restService.request<any, PagedResultDto<ClientCommandesDto>>({
      method: 'GET',
      url: '/api/app/commande',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  insertClientCommandsByEntity = (entity: ClientCommandesDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: '/api/app/commande/clientCommands',
      body: entity,
    },
    { apiName: this.apiName });

  update = (id: string, input: CreateUpdateCommandeDto) =>
    this.restService.request<any, CommandeDto>({
      method: 'PUT',
      url: `/api/app/commande/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
