import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { InlineHandler } from './../components/inline';
import { ReuseEventHandler } from './../components/reuse-event-handler';
import { MultipleEventHandler } from './../components/multiple-event-handler';
import { EventObject } from './../components/event-object';
import { PreventDefault } from './../components/prevent-default';
import { CurrentTarget } from './../components/current-target';
import { SynchronousEventHandling } from './../components/synchronus-event-handling';
import { PropFunctionExample } from './../components/prop-function';
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
      <h2>3.- Multiple Event Handler</h2>
      <MultipleEventHandler />
      <h2>4.- Event Objects</h2>
      <EventObject />
      <h2>5.- Prevent Default - click</h2>
      <PreventDefault />
      <h2>6.- Current target</h2>
      <CurrentTarget />
      <h2>7.- Synchrons Event Handling</h2>
      <SynchronousEventHandling />
      <h2>8.- PropFunction</h2>
      <PropFunctionExample />
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
