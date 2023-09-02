import { component$, useStore, useStyles$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';
export const PlusInfoCss = `
  .plus-info {
    margin-top: 1em;
    border: 1px solid red;
    padding: 1em;
    display: block;
  }
`;

export const PlusInfo = component$(() => {
  useStyles$(PlusInfoCss);
  return (
    <div class="plus-info">
      <div>More info...</div>
    </div>
  );
});

export default component$(() => {
  const store = useStore({show: false});

  return (
    <div>
      <h1>Home </h1>
      <p>Home Page</p>
      <Link href="/second">Second Page (SPA)</Link>&nbsp;/&nbsp;
      <a href="/second">Second Page (MPA) - Recarga de nuevo todo</a>
      <br/><br/>
      {store.show ? <PlusInfo /> : null}
      <button onClick$={() => (store.show = !store.show)}>Show Plus Info</button>
    </div>
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
