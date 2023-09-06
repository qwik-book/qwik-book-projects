import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { UseComputedBasic } from '../components/use-computed-basic';
import { UseComputedToUpperCase } from '../components/use-computed-to-uppercase';
import { UseComputedNewText } from '../components/use-computed-new-text';
import { UseComputedNewTextUseStore } from '../components/use-computed-new-text-use-store';
import { UseComputedNewTextUseStoreProps } from '../components/use-computed-new-text-use-store-props';
import { UseComputedNewTextUseStoreContext } from '../components/use-computed-new-text-use-store-context';
import { UseComputedPractice } from '../components/use-computed-practice';

export default component$(() => {
  return (
    <>
      <UseComputedBasic />
      <hr/>
      <UseComputedToUpperCase />
      <hr/>
      <UseComputedNewText />
      <hr/>
      <UseComputedNewTextUseStore />
      <hr/>
      <UseComputedNewTextUseStoreProps />
      <hr/>
      <UseComputedNewTextUseStoreContext />
      <hr/>
      <UseComputedPractice />
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
