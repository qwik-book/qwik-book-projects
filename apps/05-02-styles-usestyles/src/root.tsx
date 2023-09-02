// 1.- Añadimos el hook useStyles$
import { component$, useStyles$ } from '@builder.io/qwik';
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from '@qwik-books-projects/core';

// 2.- Cargamos los estilos en línea
import globalStyles from './global.css?inline';

export default component$(() => {
  // 3.- Los añadimos para cargarlos de manera diferida cuando este disponible el componente
  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="es">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
