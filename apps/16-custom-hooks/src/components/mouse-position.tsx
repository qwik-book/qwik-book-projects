import { component$ } from '@builder.io/qwik';
import {useMousePosition} from './../hooks/useMousePosition';

export const MousePosition = component$(() => {
  // 1.- Uso de nuestro hook para detectar la posición del cursor
  const pos = useMousePosition();
  // 2.- Mostrar las coordenadas x, y
  return (
    <div>
        <h1>4.- Obteniendo posición del cursor del ratón</h1>
        <p>MousePosition: ({pos.x}, {pos.y})</p>
    </div>
  );
});