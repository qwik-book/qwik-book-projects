import { useStore, $, useOnDocument } from '@builder.io/qwik';

const useMousePosition = () => {
  // 1.- Guardamos la posición del cursor del ratón con sus coordenadas
  const position = useStore({ x: 0, y: 0 });

  // 2.- Escuchar eventos en el elemento raíz del componente actual.
  useOnDocument(
    'mousemove',
    $((event) => {
      // 3.- Obtenemos el evento del ratón
      const { x, y } = event as MouseEvent;
      // 4.- Actualizamos
      position.x = x;
      position.y = y;
    })
  );
  return position;
};

export { useMousePosition };
