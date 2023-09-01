import { component$ } from '@builder.io/qwik';
import { useLocation, type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  // Obtenemos toda la información acerca de la ubicación respecto a la navegación
  const location = useLocation();
  return (
    <div>
      <div>Product Item Details [productId] - Info page</div>
      <p>Href: {location.url.href}</p>                
      <p>Pathname: {location.url.pathname}</p>       
      <p>Product Id: {location.params.productId}</p>  
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Book - Proyectos - Página Producto con detalles",
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
