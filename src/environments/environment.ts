import { Environment } from '@abp/ng.core';

const baseUrl = "https://localhost:44353"

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'GestionDeStock',
    logoUrl: '',
  },
  // oAuthConfig: {
  //   issuer: 'https://localhost:44368',
  //   redirectUri: baseUrl,
  //   clientId: 'AbpPrimengSample_App',
  //   responseType: 'code',
  //   scope: 'offline_access openid profile role email phone AbpPrimengSample',
  // },
  apis: {
    default: {
      url: 'https://localhost:44353',
      rootNamespace: 'GestionDeStock',
    },
  },
} as Environment;