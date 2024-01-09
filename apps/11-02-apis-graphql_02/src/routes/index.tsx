import {
  Resource,
  component$,
  useResource$,
  useSignal,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { breakingBapCharactersGraphQLAPI } from '../api/characters';

export default component$(() => {

  // 2.- Accedemos a la API
  const charactersListResource = useResource$<any>(({ cleanup }) => {
    const controller = new AbortController();
    cleanup(() => controller.abort());
    // Llamada a la función pasando únicamente la consulta en "query"
    return breakingBapCharactersGraphQLAPI(
      {
        query: `{
          characters {
            id
            name
            votes
          }
        }
        `,
      },
      controller,
    );
  });

  

  // 3.- Pintamos el resultado
  return (
    <>
      <h1>Countries</h1>
      
      <hr />
      
      <hr />
      
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
