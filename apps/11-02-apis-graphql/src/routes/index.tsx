import {
  Resource,
  component$,
  useResource$,
  useSignal,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { countriesGraphQLAPI } from '../api/countries-data';

export default component$(() => {
  const selectContinent = useSignal('');

  // 2.- Accedemos a la API
  const continentsListResource = useResource$<any>(({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());
    // Llamada a la función pasando únicamente la consulta en "query"
    return countriesGraphQLAPI(
      {
        query: `{
                continents {
                    code
                    name
                }
            }
        `,
      },
      controller,
    );
  });

  const countriesByContinentListResource = useResource$<any>(
    ({ track, cleanup }) => {
      // 1.- Observamos los cambios del continente seleccionado
      track(() => selectContinent.value);
      console.log(selectContinent.value);
      const controller = new AbortController();
      cleanup(() => controller.abort());
      // 2.- Consulta para obtener el lista de paises por continente seleccionado

      return countriesGraphQLAPI(
        {
          query: `
                query getCountriesByContinent($filter: CountryFilterInput){
                    countries(filter: $filter) {
                        name
                        capital
                        currency
                        phone
                        continent {
                            name
                        }
                    }
                }
            `,
          variables: {
            filter: {
              continent: {
                eq: selectContinent.value,
              },
            },
          },
        },
        controller,
      );
    },
  );

  // 3.- Pintamos el resultado
  return (
    <>
      <h1>Countries</h1>
      <p>
        Seleccione el continente:{' '}
        {selectContinent.value === ''
          ? 'Seleccione uno por favor'
          : selectContinent.value}
      </p>
      <hr />
      <Resource
        value={continentsListResource}
        onPending={() => <div>Cargando...</div>}
        onRejected={() => <div>Error al cargar la lista de continentes</div>}
        onResolved={({ continents }) => {
          return continents.length ? (
            <div>
              {continents.map((continent: any) => (
                <button
                  key={continent.name.toLowerCase()}
                  onClick$={() => (selectContinent.value = continent.code)}
                >
                  {continent.name}
                </button>
              ))}
            </div>
          ) : (
            <p>Sin resultados</p>
          );
        }}
      />
      <hr />
      <Resource
        value={countriesByContinentListResource}
        onPending={() => <div>Cargando...</div>}
        onRejected={() => <div>Error a la hora de cargar la información de paises</div>}
        onResolved={({countries}) => {
            return (countries.length ?
            <ul class="list">
                {countries.map((country: any) => (
                <li class="list" key={country.name.toLowerCase()}>
                    {country.name}
                </li>
                ))}
            </ul> : <p>Sin resultados</p>
            );
        }}
        />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Book - Proyectos',
  meta: [
    {
      name: 'description',
      content:
        'Trabajando con los diferentes proyectos del libro de Qwik en Español',
    },
    {
      name: 'keywords',
      content: 'qwik, qwik-book',
    },
    {
      name: 'author',
      content: 'Anartz Mugika Ledo',
    },
    {
      name: 'og:image',
      content:
        'https://jgengle.github.io/Leaflet/examples/quick-start/thumbnail.png',
    },
    {
      name: 'og:url',
      content: 'https://github.com/qwik-book/qwik-book-projects',
    },
    {
      name: 'twitter:image',
      content:
        'https://jgengle.github.io/Leaflet/examples/quick-start/thumbnail.png',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Qwik - El libro',
    },
    {
      name: 'twitter:description',
      content:
        'Aprende Qwik desde 0 paso a paso aplicando conceptos teórico-prácticas hasta publicar nuestros proyectos',
    },
  ],
};
