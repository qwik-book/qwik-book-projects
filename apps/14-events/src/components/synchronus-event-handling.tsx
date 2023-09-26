import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const SynchronousEventHandling = component$(() => {
  // 1.- Aquí tratamos la referencia del elemento HTML para el arrastre
  const draggableRef = useSignal<HTMLElement>();
  // 2.- Almacaremos el valor del estado del arrastre (dragstart / dragend)
  const dragStatus = useSignal(
    'A la espera de arrastrar para cambiar de estado'
  );

  useVisibleTask$(({ cleanup }) => {
    if (draggableRef.value) {
      // 3.- Usamos la API de DOM para añadir el escuchador de eventos (event listener).
      const dragstart = () => (dragStatus.value = 'dragstart (Arrastrando)');
      const dragend = () =>
        (dragStatus.value = 'dragend (Arrastre finalizado)');

      // 4.- Registro de los eventos
      draggableRef.value!.addEventListener('dragstart', dragstart);
      draggableRef.value!.addEventListener('dragend', dragend);

      // 5.- Limpiamos
      cleanup(() => {
        draggableRef.value!.removeEventListener('dragstart', dragstart);
        draggableRef.value!.removeEventListener('dragend', dragend);
      });
    }
  });

  return (
    <div>
      <button draggable ref={draggableRef}>
        {dragStatus.value === 'dragstart (Arrastrando)' ? 'Arrastrando :)' : '¡¡Arrastrame!!'}
      </button>
      <p>{dragStatus.value}</p>
    </div>
  );
});
