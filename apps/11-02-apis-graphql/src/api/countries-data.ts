// 0 - Fichero alojado en: src/api/countries-data.ts

// 1.- Endpoint principal
const API_URL_GRAPHQL = 'https://countries.trevorblades.com/';
// 2.- Función donde se realizan la consultas
export const countriesGraphQLAPI = async (
    body: { query: string; variables?: object }, // 3.- Consultas obligatorias + filtros
    controller?: AbortController
): Promise<Array<any>> => {
    // 4.- Realizamos la llamada fetch con POST pasándole siempre el body con mínimo la "query" (consulta)
    const resp = await fetch(API_URL_GRAPHQL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        signal: controller?.signal,
    });
    console.log('FETCH resolved');
    // 5.- Extraemos la propiedad data, que siempre es el valor principal que tenemos en común
    const { data } = await resp.json();
    console.log(data);
    return data || Promise.reject(data);
};