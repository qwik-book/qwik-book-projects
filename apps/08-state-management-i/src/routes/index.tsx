import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { BasicSignal, First, Parent } from './../components/state/signal';
import {
  BasicStore,
  Parent as ParentStore,
  First as FirstStore,
  StoreNORecursivity,
  StoreRecursivity,
  StoreRecursivityArray,
  StoreRecursivityArrayThree,
  StoreRecursivityArrayTwo,
} from './../components/state/store';

export default component$(() => {
  return (
    <div>
      <h2>1.- useSignal Básico</h2>
      <BasicSignal />
      <hr />
      <h2>2.- useStore Básico</h2>
      <BasicStore />
      <hr />
      <h2>3.- useStore - CON Recursividad</h2>
      <StoreRecursivity />
      <hr />
      <h2>4.- useStore - CON Recursividad en Arrays</h2>
      <StoreRecursivityArray />
      <hr />
      <h2>5.- useStore - CON Recursividad en Arrays II</h2>
      <StoreRecursivityArrayTwo />
      <hr />
      <h2>6.- useStore - CON Recursividad en Arrays III</h2>
      <StoreRecursivityArrayThree />
      <hr />
      <h2>7.- useStore - SIN Recursividad</h2>
      <StoreNORecursivity />
      <hr />
      <h2>8.- useSignal - props - Pasar información entre componentes</h2>
      <Parent />
      <hr />
      <h2>9.- useStore - props - Pasar información entre componentes</h2>
      <ParentStore />
      <hr />
      <h2>10.- useSignal - props - Pasar información estado con Context API</h2>
      <First />
      <hr />
      <h2>11.- useStore - props - Pasar información estado con Context API</h2>
      <FirstStore />
      <hr />
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
