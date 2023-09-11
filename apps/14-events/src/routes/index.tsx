import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import {InlineHandler} from './../components/inline';
import { ReuseEventHandler } from './../components/reuse-event-handler';
import { MultipleEventHandler } from './../components/multiple-event-handler'

export default component$(() => {
  return (
    <div>
      <h1>
        Bienvenido a un nuevo proyecto de Qwik <span class="lightning">⚡️</span>
      </h1>
      <h2>1.- Inline Handler</h2>
      <InlineHandler />
      <h2>2.- Reuse Event Handler</h2>
      <ReuseEventHandler />
      <h2>Multiple Event Handler</h2>
      <MultipleEventHandler />
    </div>
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
