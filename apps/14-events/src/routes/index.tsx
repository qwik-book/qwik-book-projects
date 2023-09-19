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
import { UseOnExample } from './../components/useon';
import { UseOnDocument } from './../components/use-on-document';
import { UseOnWindow } from './../components/use-on-window';
import { UseOnWindowScreens } from './../components/use-on-window-screens';
import { UseOnWindowScreensCountRefreshs } from './../components/use-on-window-screens-count-refreshs';
export default component$(() => {
  return (
    <div>
      <h1>
        Bienvenido a un nuevo proyecto de Qwik{' '}
        <span class='lightning'>⚡️</span>
      </h1>
      <hr /><h2>1.- Inline handler - Manejador en línea</h2>
      <InlineHandler />
      <hr />
      <h2>2.- Reuse Event Handler - Reutilización de manejadores de eventos</h2>
      <ReuseEventHandler />
      <hr />
      <h2>3.- Multiple Event Handler</h2>
      <MultipleEventHandler />
      <hr />
      <h2>4.- Event Objects</h2>
      <EventObject />
      <hr />
      <h2>5.- Prevent Default - click</h2>
      <PreventDefault />
      <hr />
      <h2>6.- Current target</h2>
      <CurrentTarget />
      <hr />
      <h2>7.- Synchrons Event Handling</h2>
      <SynchronousEventHandling />
      <hr />
      <h2>8.- PropFunction</h2>
      <PropFunctionExample />
      <hr />
      <h2>9.- Hooks - useOn</h2>
      <UseOnExample />
      <hr />
      <h2>10.- Hooks - useOnDocument</h2>
      <UseOnDocument />
      <hr />
      <h2>11.- Hooks - useOnWindow</h2>
      <UseOnWindow />
      <hr />
      <h2>11B.- Hooks - useOnWindow - Ejercicio 1</h2>
      <UseOnWindowScreens />
      <hr />
      <h2>11C.- Hooks - useOnWindow - Ejercicio 2</h2>
      <UseOnWindowScreensCountRefreshs />
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
