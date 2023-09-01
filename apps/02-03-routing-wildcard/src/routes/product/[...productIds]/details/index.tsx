import { component$ } from '@builder.io/qwik';
import { type DocumentHead, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const location = useLocation();
  return (
    <>
      <div>Product - Page Details</div>
      <p>Href: {location.url.href}</p>
      <p>Pathname: {location.url.pathname}</p>
      <p>Product Id:</p>{' '}
      <ul>
        {location.params.productIds.split('/').map((id, index) => {
            return (id !== '') ? (
                <li>
                  Producto seleccionado ({index + 1}): {id}
                </li> 
              ): undefined
        })}
      </ul>
    </>
  );
});

export const head: DocumentHead = {
    title: "Qwik Book - Proyectos - Rutas comodín - Wildcard - Límite",
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