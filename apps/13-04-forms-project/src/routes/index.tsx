import { component$, useStyles$ } from '@builder.io/qwik';
import { Form, type DocumentHead, routeAction$, zod$, z } from '@builder.io/qwik-city';
import styles from './index.css?inline';

export const useAddUrlToStoreInLocal = routeAction$(async (data) => {

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
  title: z.string().min(6, "Se deben de añadir mínimo 6 caracteres"),
  description: z.string().min(15, "Se deben de añadir mínimo 15 caracteres"),
  url: z.string().url("Debe de añadirse una URL correcta"),
}));

export default component$(() => {
  useStyles$(styles);
  const action = useAddUrlToStoreInLocal();
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
            <input class="input" type="text" name="title" required={true} />
            <span>Título</span>
          </label>
          <label>
            <input class="input" type="text" name="description" required={true} />
            <span>Descripción</span>
          </label>
          <label>
            <input class="input" type="text" name="url" required={true} />
            <span>Enlace</span>
          </label>
          <button class="submit">Guardar</button>
        </Form>
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
