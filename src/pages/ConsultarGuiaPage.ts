import { APIRequestContext } from '@playwright/test';
import { URL_BASE } from '../utils/constantes';
import { CrearGuiaPage } from './CrearGuiaPage';


export class ConsultarGuiaPage extends CrearGuiaPage{

  constructor(request: APIRequestContext) {
    super(request)
  }

    async obtenerGuiaPorId(id: string): Promise<any> {
        const response = await this.request.get(`${URL_BASE.GUIDE_GET}${id}`);
        //console.log('aqui',response)
        if (!response.ok()) {
        
          throw new Error(`Error obteniendo guía: ${response.status()} - ${await response.text()}`);
        }
        return response.json();
      }
}