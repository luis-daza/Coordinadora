import { test, request, expect } from '@playwright/test';
import { CrearGuiaPage } from '../pages/CrearGuiaPage';
import guiaBase from '../utils/guiaBase.json';
import { URL_BASE } from '../utils/constantes';

test.describe('API - Crear guía de Recaudo', () => {
  let crearGuia: CrearGuiaPage;

  test.beforeAll(async () => {
    const requestContext = await request.newContext({
      baseURL: URL_BASE.COORDINADORA_PATH,
    });

    crearGuia = new CrearGuiaPage(requestContext);
  });

  test('Crear guía con referencia vacia y mostrar error de API', async () => {
    const guiaModificada = { ...guiaBase };
    guiaModificada.referenciaRecaudo = "";
  
    
    try {
      const crearResponse = await crearGuia.crearGuia(guiaModificada);

      throw new Error(`Se realizo la creación de la guia sin problemas ${JSON.stringify(crearResponse)}`);

    } catch (error: any) {
        if (error.response && typeof error.response.text === 'function') {
        const errorText = await error.response.text();
        console.error(' Error devuelto por la API:', errorText);
      } else {
        console.error(' Error al crear guía:', error.message);
      }
    }
  });

});