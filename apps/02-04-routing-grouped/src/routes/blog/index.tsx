import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <div>Blog - Página</div>;
});

export const head: DocumentHead = {
  title: 'Qwik Book - Capítulo 2 - Enrutamiento Básico',
  meta: [
    {
      name: 'description',
      content:
        'Página Blog - Trabajando con los diferentes proyectos del libro de Qwik en Español',
    },
    {
      name: 'author',
      content: 'Anartz Mugika Ledo',
    },
  ],
};
