import { Resource, component$, useResource$ } from '@builder.io/qwik';
import { useLocation, Link } from '@builder.io/qwik-city';
import { getCharacterAPI } from '../../../api/characters';

export default component$(() => {
  const location = useLocation();
  // 2 Para cargar el contenido de la función que nos trae la información de la API
  const getCharacterResponse = useResource$<any>(({ track, cleanup }) => {
    track(() => location.params.id); 
    // 3.- Es buena práctica usar `AbortController` para abortar (cancelar) la obtención de datos si
    // llega una nueva solicitud. Creamos un nuevo `AbortController` y registramos una `limpieza` (cleanup)
    // función que se llama cuando se vuelve a ejecutar esta función.
    const controller = new AbortController();
    cleanup(() => controller.abort());
    // 4.- Llamar a la función y obtener el resultado
    return getCharacterAPI(location.params.id, controller);
  });
  return <>
    <h1>Personaje seleccionado: ID {location.params.id}</h1>
    <Resource
        value={getCharacterResponse}
        onPending={() => <div>Cargando...</div>} // Mientras está ejecutando la carga
        onRejected={() => (
          <div>Fallo a la hora de cargar la lista de carreras</div>
        )} // Rechazado
        onResolved={(result) => {
          return <div>
            <h2>{result.name}</h2>
            <p>{result.description}</p>
            <p>Número de episodios en los que participa: {result.episodes}</p>
            <p><a href={result.url}>Más información</a></p>
            <Link href={'/'}>Volver</Link>
          </div>
        }}
      />
  </>;
});
