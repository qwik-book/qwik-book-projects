import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

export const OrangeComponent = component$(() => {
  useStylesScoped$(`
    .bg {
      background-color: orange;
    }
  `);

  return (
    <div class="bg">
      <div>OrangeComponent</div>
    </div>
  );
});

export const GreenComponent = component$(() => {
  useStylesScoped$(`
    .bg {
      background-color: green;
    }`);

  return (
    <div class="bg">
      <div>Green Componente</div>
    </div>
  );
});

export default component$(() => {
  return (
    <>
      <h1>Home </h1>
      <p>Home Page</p>
      <OrangeComponent />
      <GreenComponent />
      <Link href="/second">Second Page (SPA)</Link>&nbsp;/&nbsp;
      <a href="/second">Second Page (MPA) - Recarga de nuevo todo</a>
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
