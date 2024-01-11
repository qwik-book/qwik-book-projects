import {
  Resource,
  component$,
  useResource$,
  useSignal,
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { breakingBapCharactersGraphQLAPI } from '../api/characters';

export default component$(() => {
  const selectCharacter = useSignal(1);
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

  const characterSelectResource = useResource$<any>(
    ({ track, cleanup }) => {
    // 1.- Observamos los cambios del continente seleccionado
    track(() => selectCharacter.value);
    
    const controller = new AbortController();
    cleanup(() => controller.abort());
    // 2.- Consulta para obtener el lista de paises por continente seleccionado

    return breakingBapCharactersGraphQLAPI(
        {
            query: `
              query getSelectCharacter($id: Int!) {
                character(id: $id) {
                  name
                  description
                  episodes
                  url
                  votes
                }
              }
            `,
            variables: { 
                id: selectCharacter.value
            }
        },
        controller
    );
    }
  );

  // 3.- Pintamos el resultado
  return (
    <>
      <h1>Personajes Breaking Bad</h1>
      <p>Personaje seleccionado: {selectCharacter.value}</p>
      <Resource
            value={charactersListResource}
            onPending={() => <div>Cargando...</div>}
            onRejected={() => <div>Error al cargar la lista de personajes</div>}
            onResolved={({ characters }) => {
              return characters.length ? (
              <div>
                  {characters.map((character: any) => (
                  <button key={character.name.toLowerCase()} onClick$={() => selectCharacter.value = character.id}>{character.name}</button>
                  ))}
              </div>
              ) : (
              <p>Sin resultados</p>
              );
          }}
        />
      <hr />
    <Resource
        value={characterSelectResource}
        onPending={() => <div>Cargando...</div>}
        onRejected={() => <div>Falla al cargar los detalles del personaje seleccionado {selectCharacter.value}</div>}
        onResolved={({character}) => {
          return (character ?
          <ul class="list">
              {Object.keys(character).map((key: any) => (
              <li key={key.toLowerCase()}>
                  {character[key]}
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
