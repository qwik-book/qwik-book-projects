import type { DocumentHead } from '@builder.io/qwik-city';

import { component$ } from '@builder.io/qwik';
import { CounterNoHook } from '../components/counter-no-hook';
import { CounterWithHook } from '../components/counter-with-hook';
import { ThemeSelection } from '../components/theme-selection-hook';
import { MousePosition } from '../components/mouse-position';
import { OurLocation } from '../components/our-location';

export default component$(() => {

  return (
    <>
      <CounterNoHook />
      <CounterWithHook />
      <ThemeSelection />
      <MousePosition />
      <OurLocation />
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Book - Proyectos",
  meta: [
    {
      name: "description",
      content:
        "Trabajando con los diferentes proyectos del libro de Qwik en Español",
    },
    {
      name: "keywords",
      content: "qwik, qwik-book",
    },
    {
      name: "author",
      content: "Anartz Mugika Ledo",
    },
    {
      name: "og:image",
      content:
        "https://jgengle.github.io/Leaflet/examples/quick-start/thumbnail.png",
    },
    {
      name: "og:url",
      content: "https://github.com/qwik-book/qwik-book-projects",
    },
    {
      name: "twitter:image",
      content:
        "https://jgengle.github.io/Leaflet/examples/quick-start/thumbnail.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Qwik - El libro",
    },
    {
      name: "twitter:description",
      content:
        "Aprende Qwik desde 0 paso a paso aplicando conceptos teórico-prácticas hasta publicar nuestros proyectos",
    },
  ],
};
