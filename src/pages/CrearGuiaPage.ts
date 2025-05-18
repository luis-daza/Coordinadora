import { APIRequestContext, APIResponse } from '@playwright/test';
import { URL_BASE } from '../utils/constantes';

export class CrearGuiaPage {

  protected readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async crearGuia(body: any): Promise<any> {
    const response: APIResponse = await this.request.post(URL_BASE.GUIDE_POST, {
      data: body
    });

    return response.json();
  }

  
}