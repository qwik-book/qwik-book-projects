import { component$, $, useOnDocument, useStore } from '@builder.io/qwik';

export const UseOnDocument = component$(() => {
  const store = useStore({
    position: {
      x: 0,
      y: 0,
    },
  });

  useOnDocument(
    'mousemove',
    $((event) => {
        // Podemos acceder a la altura del "document", la parte visible
      console.log('Height: ' + document.body.clientHeight)
      store.position.x = (event as MouseEvent).x;
      store.position.y = (event as MouseEvent).y;
    })
  );

  return (
    <div>
      <p>
        Mi posición actual [x, y]: [{store.position.x}, {store.position.y}]
      </p>
    </div>
  );
});
