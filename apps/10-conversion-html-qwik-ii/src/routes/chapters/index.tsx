import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { chaptersData } from './../../data/chapters';
import {Accordion} from '@qwik-books-projects/shared';

export default component$(() => {
  const chapters = useSignal(chaptersData);
  return (
    <>
      <div class="container mt-2">
        <h1 class="page-title">Listado de cap&iacute;tulos</h1>
        <hr />
        <Accordion data={chapters}/>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Capítulos',
  meta: [
    {
      name: 'description',
      content: 'Listado de capítulos que contiene el libro de Qwik',
    },
  ],
};
