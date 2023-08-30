import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      Bienvenido a la página de contacto. Prácticando con Qwik los primeros
      pasos
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Contacto',
  meta: [
    {
      name: 'description',
      content: 'Anartz Mugika contact page',
    },
  ],
};
