import { component$, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import {
  Form,
  type DocumentHead,
  routeAction$,
  zod$,
  z,
} from '@builder.io/qwik-city';
import styles from './index.css?inline';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const useAddUrlToStoreInLocal = routeAction$(
  async (data) => {
    // Para ver en consola como coge los datos
    console.log('Title', data.title);
    console.log('Description', data.description);
    console.log('URL', data.url);

    return {
      success: true,
      readyToStorage: true,
      data,
    };
  },
  // Para verificar lo introducido
  zod$({
    title: z.string().min(6, 'Se deben de añadir mínimo 6 caracteres'),
    description: z.string().min(15, 'Se deben de añadir mínimo 15 caracteres'),
    url: z.string().url('Debe de añadirse una URL correcta'),
  }),
);

export default component$(() => {
  useStyles$(styles);
  const action = useAddUrlToStoreInLocal();

  const fieldErrors = action.value?.fieldErrors!;
  const titleError = fieldErrors?.title;
  const descriptionError = fieldErrors?.description;
  const urlError = fieldErrors?.url;

  const { set, clear, data, loading } = useLocalStorage(`my-bookmarks`);  
          
  useVisibleTask$(async ({ track }) => {
    track(() => [action.value?.readyToStorage]);
  
    if (action.value?.readyToStorage) {
      console.log("OK");
      const saveData = [...data.value, action.value.data]
      await set(saveData);
      action.value.readyToStorage = false;
    }
  });
    
  return (
    <div>
      <h1>
        Repositorio de Marcadores Favoritos <span class="lightning">⚡️</span>
      </h1>
      <div>
        <Form class="form" action={action}>
          <p class="title">Añadir un nuevo enlace </p>
          <p class="message">Añadir enlace para almacenarlo como marcador</p>
          <label>
            <input
              class={`input ${titleError ? 'invalid-class' : ''}`}
              type="text"
              name="title"
            />
            <span class={titleError ? 'invalid-class' : ''}>Título</span>
          </label>
          {titleError && <div class="invalid-message">{titleError[0]}</div>}
          <label>
            <input
              class={`input ${descriptionError ? 'invalid-class' : ''}`}
              type="text"
              name="description"
            />
            <span class={descriptionError ? 'invalid-class' : ''}>
              Descripción
            </span>
          </label>
          {descriptionError && (
            <div class="invalid-message">{descriptionError[0]}</div>
          )}
          <label>
            <input
              class={`input ${urlError ? 'invalid-class' : ''}`}
              type="text"
              name="url"
            />
            <span class={urlError ? 'invalid-class' : ''}>Enlace</span>
          </label>
          {urlError && <div class="invalid-message">{urlError[0]}</div>}
          <button class="submit">Guardar</button>
        </Form>
        {action.status === 200 && action.value?.success && (
          <>Almacenado correctamente el elemento:  {action.value.data.title} ({action.value.data.url})</>
        )}
      </div>
      <hr />
      <h2>Lista de enlaces favoritos</h2>
      { loading.value && <h2>Cargando marcadores favoritos...</h2>}
      {
        !loading.value && !data.value.length && <h2>No hay marcadores almacenados. Empieza a añadirlos desde el formulario</h2>
      }
      {
        !loading.value && data.value.length && <ul>
        {data.value.map((urlItem) => {
          const {title, url, description} = urlItem;
          return (<li>
            <span>{title}</span> - <span>{description}</span> /{' '}
            <a class='btn-url' href={url} target='_blank'>
                Ir a enlace
            </a>
        </li>)
        })}
      </ul>
      }
      <hr/>
      <button class="delete-btn" onClick$={() => clear()}>Eliminar</button>
      
      
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Book - BookmarkDB',
  meta: [
    {
      name: 'description',
      content:
        'Proyecto trabajando con formularios donde implementamos un sistema para almacenar enlaces favoritos en local',
    },
    {
      name: 'keywords',
      content: 'qwik, qwik-book, forms, zod, bookmark',
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
      content: 'Qwik - El libro - Proyecto BookmarkDB',
    },
    {
      name: 'twitter:description',
      content:
        'Proyecto trabajando con formularios donde implementamos un sistema para almacenar enlaces favoritos en local',
    },
  ],
};
