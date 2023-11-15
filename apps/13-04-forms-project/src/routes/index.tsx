import {
  component$,
  useStore,
  useStyles$,
  useVisibleTask$,
} from '@builder.io/qwik';
import {
  Form,
  type DocumentHead,
  routeAction$,
  zod$,
  z,
} from '@builder.io/qwik-city';
import styles from './index.css?inline';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { InputField } from '../components/form/input';

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

  const bookMark = useStore({
    form: {
      url: '',
      title: '',
      description: '',
    },
  });

  const action = useAddUrlToStoreInLocal();

  const fieldErrors = action.value?.fieldErrors!;
  const titleError = fieldErrors?.title;
  const descriptionError = fieldErrors?.description;
  const urlError = fieldErrors?.url;

  const { set, clear, data, loading } = useLocalStorage(`my-bookmarks`);

  useVisibleTask$(async ({ track }) => {
    track(() => [action.value?.readyToStorage]);

    if (action.value?.readyToStorage) {
      console.log('OK');
      const saveData = [...data.value, action.value.data];
      await set(saveData);
      action.value.readyToStorage = false;
      bookMark.form = { url: '', title: '', description: '' };
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
          <InputField
            name="title"
            label="Título"
            type="text"
            value={bookMark.form.title}
            errorMessage={
              action.value?.failed && titleError?.length
                ? titleError[0]
                : undefined
            }
          />
          <InputField
            name="description"
            label="Descripción"
            type="text"
            value={bookMark.form.description}
            errorMessage={
              action.value?.failed && descriptionError?.length
                ? descriptionError[0]
                : undefined
            }
          />
          <InputField
            name="url"
            label="Url - Enlace"
            type="url"
            value={bookMark.form.url}
            errorMessage={
              action.value?.failed && urlError?.length ? urlError[0] : undefined
            }
          />
          <button class="submit">Guardar</button>
        </Form>
        {action.status === 200 && action.value?.success && (
          <>
            Almacenado correctamente el elemento: {action.value.data.title} (
            {action.value.data.url})
          </>
        )}
      </div>
      <hr />
      <h2>Lista de enlaces favoritos</h2>
      {loading.value && <h4>Cargando marcadores favoritos...</h4>}
      {!loading.value && !data.value.length && (
        <h4>
          No hay marcadores almacenados. Empieza a añadirlos desde el formulario
        </h4>
      )}
      {!loading.value && data.value.length && (
        <ul>
          {data.value.map((urlItem) => {
            const { title, url, description } = urlItem;
            return (
              <li>
                <span>{title}</span> - <span>{description}</span> /{' '}
                <a class="btn-url" href={url} target="_blank">
                  Ir a enlace
                </a>
              </li>
            );
          })}
        </ul>
      )}
      <hr />
      <button class="delete-btn" onClick$={() => clear()}>
        Eliminar
      </button>
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
