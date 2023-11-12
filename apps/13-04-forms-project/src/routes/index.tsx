import { component$, useStyles$ } from '@builder.io/qwik';
import {
  Form,
  type DocumentHead,
  routeAction$,
  zod$,
  z,
} from '@builder.io/qwik-city';
import styles from './index.css?inline';

export const useAddUrlToStoreInLocal = routeAction$(
  async (data) => {
    // Para ver en consola como coge los datos
    console.log('Title', data.title);
    console.log('Description', data.description);
    console.log('URL', data.url);

    return {
      success: true,
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
          <>Preparado para guardar</>
        )}
      </div>
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
