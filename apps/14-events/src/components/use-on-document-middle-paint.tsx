import {
  component$,
  $,
  useOnDocument,
  useStore,
  useStyles$,
} from '@builder.io/qwik';

export const UseOnDocumentMiddlePaint = component$(() => {
  useStyles$(`
    /* Establece el fondo de la página */
    #root-use-on-document {
      background-color: #f0f0f0; /* Puedes cambiar este color de fondo según tus preferencias */
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh; /* Centra verticalmente en la ventana del navegador */
    }

    /* Define la línea vertical */
    #middle-limit {
      width: 2px; /* Ancho de la línea */
      height: 100%; /* Altura de la línea (igual a la altura de la ventana) */
      background-color: #000; /* Color de la línea (negro en este caso) */
    }
  `);
  const store = useStore({
    position: {
      x: 0,
      y: 0,
      middle: 0,
      rightSide: false,
    },
  });

  useOnDocument(
    'mousemove',
    $((event) => {
      // Podemos acceder a la altura del "document", la parte visible
      console.log('Width: ' + document.body.clientWidth);

      store.position.x = (event as MouseEvent).x;
      store.position.y = (event as MouseEvent).y;
      store.position.middle = document.body.clientWidth / 2;

      // Cambiamos el fondo a rojo si rebasa la línea vertical de la mitad
      document.getElementById('root-use-on-document')!.style.backgroundColor =
        document.body.clientWidth / 2 < store.position.x ? 'red' : '#f0f0f0';
    })
  );

  return (
    <div>
      <p>
        Mi posición actual [x, y]: [{store.position.x}, {store.position.y}]
      </p>
      <p>Límite de la mitad horizontal (eje x): {store.position.middle}</p>
      <div id='root-use-on-document'>
        <div id='middle-limit'></div>
      </div>
    </div>
  );
});
