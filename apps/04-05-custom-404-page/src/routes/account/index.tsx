import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>
        Bienvenido a la página <code>account</code>
      </h1>
      <p>
        Estamos en la página de <code>account</code>
      </p>
      <h2>Otras páginas de interés</h2>
      <ul>
        <li>
          Principal:
          <Link href="/" class="my-link">
            Ir al inicio
          </Link>
          <li>
            Blog (error 404):{" "}
            <Link href="/blog" class="my-link">
              Ir al blog con error (No existe)
            </Link>
          </li>
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Book - Account",
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
