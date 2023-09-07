import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BasicSlot, BasicSlotMoreExamples } from '../components/basic-slot';
import { RandomPanelContent } from '../components/basic-slot-random';
import { BasicNamedSlot } from '../components/named-slot';
import { BasicNamedSlotNoAddReference } from '../components/named-slot-without-one-reference';
import { BasicNamedSlotDuplicateReference } from '../components/named-slot-duplicate-reference';
import { NamedSlotsConditional } from '../components/named-slots-conditional';
import { FallbackContent } from '../components/fallback-content';

export default component$(() => {
  return (
    <div>
      <h1>
        Content Projection - Proyectando contenidos <span class="lightning">⚡️</span>
      </h1>
      <h2>1.- Slot Básico - Proyección simple</h2>
      <BasicSlot />
      <hr/>
      <h2>2.- Slot Básico - Proyección simple + ejemplos</h2>
      <BasicSlotMoreExamples />
      <hr/>
      <h2>3.- Slot Básico - Proyección simple pasando un valor con cambio de estado</h2>
      <RandomPanelContent />
      <hr/>
      <h2>4.- Slot nombrados - Named Slots</h2>
      <BasicNamedSlot />
      <hr/>
      <h2>5.- Slot nombrados - Named Slots - Proyectar sin una referencia</h2>
      <BasicNamedSlotNoAddReference />
      <hr/>
      <h2>6.- Slot nombrados - Named Slots - Proyectar añadiendo dos referencias duplicadas</h2>
      <BasicNamedSlotDuplicateReference />
      <hr/>
      <h2>7.- Slot nombrados - Named Slots - Condicionales</h2>
      <NamedSlotsConditional />
      <hr/>
      <h2>8.- Fallback content - Contenido de respaldo simple</h2>
      <FallbackContent />
      <hr/>
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
