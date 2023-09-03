import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class="container mt-2">
        <h1 class="page-title">Listado de cap&iacute;tulos</h1>
        <hr />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Capítulos",
  meta: [
    {
      name: "description",
      content: "Listado de capítulos que contiene el libro de Qwik",
    },
  ],
};