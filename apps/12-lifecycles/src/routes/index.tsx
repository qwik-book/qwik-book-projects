import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { UseTaskOnMount } from '../components/use-task-on-mount';
import { UseTaskWithTrack } from '../components/use-task-with-track';
import { UseTaskWithTrackFunction } from '../components/use-task-with-track-function';
import { UseTaskCleanUp } from '../components/use-task-cleanup';
import { UseVisibleTask } from '../components/use-visible-task';
import { UseTaskDomElementsWithIsServer } from '../components/use-task-dom-elements';

export default component$(() => {
  return (
    <div>
      <h1>
        Ciclos de vida en Qwik <span class="lightning">⚡️</span>
      </h1>
      <h2>1.- <strong>useTask$</strong> - Sin observar cambios - OnMount (Miramos terminal)</h2>
      <UseTaskOnMount />
      <hr/>
      <h2>2.- <strong>useTask$</strong> - Observando cambios con track</h2>
      <UseTaskWithTrack />
      <hr/>
      <h2>3.- <strong>useTask$</strong> - Observando cambios con track y devolver modificado</h2>
      <UseTaskWithTrackFunction />
      <hr/>
      <h2>4.- <strong>useTask$</strong> - cleanup()</h2>
      <UseTaskCleanUp />
      <hr />
      <h2>5.- <strong>useVisibleTask$</strong> - Ejemplo completo</h2>
      <UseVisibleTask />
      <hr/>
      <h2>6.- <strong>useTask$</strong> - Elemento DOM con useTask$ y isServer</h2>
      <UseTaskDomElementsWithIsServer />
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
