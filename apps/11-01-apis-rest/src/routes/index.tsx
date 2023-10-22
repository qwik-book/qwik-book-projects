import { Resource, component$, useResource$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ergastF1ChampionshipRaceListAPI } from '../api/f1';

export default component$(() => {
  // Año seleccionado
  const races = useStore({
    year: '2023',
  });
  // 2 Para cargar el contenido de la función que nos trae la información de la API
  const selectYearRacesResource = useResource$<any>(({ track, cleanup }) => {
    // Observar cambios en el año con track para ejecutar la búsqueda con el nuevo valor
    track(() => races.year); // <=======================
    // 3.- Es buena práctica usar `AbortController` para abortar (cancelar) la obtención de datos si
    // llega una nueva solicitud. Creamos un nuevo `AbortController` y registramos una `limpieza` (cleanup)
    // función que se llama cuando se vuelve a ejecutar esta función.
    const controller = new AbortController();
    cleanup(() => controller.abort());
    // 4.- Llamar a la función y obtener el resultado
    return ergastF1ChampionshipRaceListAPI(races.year, controller);
  });
  return (
    <>
      <h1>Formula 1 - Tabla de resultados {races.year}</h1>
      <span>
        Año:&nbsp;
        <input
          type="number"
          min="1950"
          max={new Date().getFullYear()}
          value={races.year}
          onInput$={(ev) => {
            const takeValue = (ev.target as HTMLInputElement).value;
            if (takeValue.length === 4) {
              races.year = takeValue;
            }
          }}
        />
      </span>
      <Resource
        value={selectYearRacesResource}
        onPending={() => <div>Cargando...</div>} // Mientras está ejecutando la carga
        onRejected={() => (
          <div>Fallo a la hora de cargar la lista de carreras</div>
        )} // Rechazado
        onResolved={(result) => {
          return result.length ? (
            <ul class="list">
              {result.map((race: any) => (
                <li>
                  <a href={race.url} target="_blank">
                    {race.raceName}
                  </a>{' '}
                  ({race.date})
                </li>
              ))}
            </ul>
          ) : (
            <p>
              Sin resultados - Comprueba que el año seleccionado está entre 1950
              y {new Date().getFullYear()} (incluido)
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
