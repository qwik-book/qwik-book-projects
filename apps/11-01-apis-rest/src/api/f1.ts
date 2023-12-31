// 0 - Fichero alojado en: src/api/ergast-f1.ts

// 1.- URL principal de la API - BASE API URL
const API_URL = 'https://ergast.com/api/f1/';

// 2.- Reniendo en cuenta la URL https://ergast.com/api/f1/<AÑO>.json
export const ergastF1ChampionshipRaceListAPI = async (
    year: string,
    controller?: AbortController
): Promise<Array<any>> => {

    // 3.- CREAMOS la referencia del AÑO con el recurso JSON
    const endPoint = `${year}.json`;

    // 4.- Formamos la URL completa del recurso para la lista de carreras
    const url = `${API_URL}${endPoint}`;

    console.log('Vamos a obtener datos desde =====>', url);

    // 5.- Pedimos los datos del año seleccionado
    const data = await fetch(url, {
    method: 'GET',
    signal: controller?.signal, 
    // 8.- Uso de Abort Controller (controller.signal). 
    // Gestionamos las posibles cancelaciones en ejecución
    });
    console.log('FETCH resolved');

    // 6.- Lista de carreras
    const json: Array<any> = (await data.json())['MRData']['RaceTable']['Races'];

    // 7.- Devolvemos resultado
    return Array.isArray(json) ? json : Promise.reject(json);
};