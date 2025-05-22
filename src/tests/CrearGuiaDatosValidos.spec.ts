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

  test('Crear guía con datos válidos', async () => {
    const response = await crearGuia.crearGuia(guiaBase);
    console.log(response.data)
    expect(response).toBeTruthy 
    
  });

});