import { component$, useSignal } from '@builder.io/qwik';

export const EventObject = component$(() => {
  const position = useSignal<{ x: number; y: number }>();
  return (
    <div
      onClick$={(event: MouseEvent) => {
        // Mostrar toda la info del evento
        console.log(event); 
        // Consultamos las propiedades de este tipo de evento:
        // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent#instance_properties
        // Asignar los valores de x e y
        (position.value = { x: event.x, y: event.y });
      }}
      style="height: 20vh; border: 2px solid green"
    >
      <p>
        Hemos realizado click en la posición [x, y]: ({position.value?.x}, {position.value?.y})
      </p>
      <p>Obtiene la posición solo haciendo click dentro del cuadro verde</p>
    </div>
  );
});
