import { Resource, component$, useResource$, useStore } from '@builder.io/qwik';
import { type DocumentHead, Link } from '@builder.io/qwik-city';
import { charactersAPI } from '../api/characters';

export default component$(() => {
 
  // 2 Para cargar el contenido de la función que nos trae la información de la API
  const charactersListResponse = useResource$<any>(({ cleanup }) => {
    // 3.- Es buena práctica usar `AbortController` para abortar (cancelar) la obtención de datos si
    // llega una nueva solicitud. Creamos un nuevo `AbortController` y registramos una `limpieza` (cleanup)
    // función que se llama cuando se vuelve a ejecutar esta función.
    const controller = new AbortController();
    cleanup(() => controller.abort());
    // 4.- Llamar a la función y obtener el resultado
    return charactersAPI(controller);
  });
  return (
    <>
      <h1>Lista de Personajes principales de Breaking Bad</h1>
      <Resource
        value={charactersListResponse}
        onPending={() => <div>Cargando...</div>} // Mientras está ejecutando la carga
        onRejected={() => (
          <div>Fallo a la hora de cargar la lista de personajes</div>
        )} // Rechazado
        onResolved={(result) => {
          return result.length ? (
            <ul class="list">
              {result.map((character: any, index: number) => (
                <li key={String(character.id).concat(character.name.toLowerCase())}>
                  <a href={character.url} target="_blank">
                    {character.name}
                  </a>{' - '}
                  ({character.description}) - <Link href={`/details/${index + 1}`}>Más detalles</Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              Sin resultados - Comprueba que la API está en funcionamiento
            </p>
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
