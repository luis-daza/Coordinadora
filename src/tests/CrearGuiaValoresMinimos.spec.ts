import { test, request, expect } from '@playwright/test';
import { CrearGuiaPage } from '../pages/CrearGuiaPage';
import guiaBase from '../utils/guiaBase.json';
import { URL_BASE } from '../utils/constantes';
import { ConsultarGuiaPage } from '../pages/ConsultarGuiaPage';
import { generarValorAleatorioPermitido } from '../utils/valorAleatorio';


test.describe('API - Crear guía de Recaudo', () => {
    let crearGuia: CrearGuiaPage;
    let consultarGuia: ConsultarGuiaPage;
  
  
    test.beforeAll(async () => {
      const requestContext = await request.newContext({
        baseURL: URL_BASE.COORDINADORA_PATH,
      });
  
      crearGuia = new CrearGuiaPage(requestContext);
      consultarGuia = new ConsultarGuiaPage(requestContext);
    });
   
    test('Crear guía con valor modificado y validar vía GET', async () => {
  
      const guiaModificada = { ...guiaBase };
      guiaModificada.valorRecaudar = generarValorAleatorioPermitido().toString(); 
      const crearResponse = await crearGuia.crearGuia(guiaModificada);
      
      const guiaId = crearResponse.data.codigo_remision;
      console.log('Id guia',guiaId) 
  
      const guiaObtenida = await consultarGuia.obtenerGuiaPorId(guiaId);
      console.log('Json Guia',guiaObtenida.data)
      console.log('Guia valor recaudo',guiaObtenida.data.valorRecaudar)

  
      expect(guiaObtenida.data.valorRecaudar).toBe(Number(guiaModificada.valorRecaudar));

    });
  
  });