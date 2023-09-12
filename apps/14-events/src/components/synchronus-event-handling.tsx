import { component$, useSignal, useVisibleTask$} from "@builder.io/qwik";


export const SynchronousEventHandling = component$(() => {
     // 1.- Aquí tratamos la referencia del elemento HTML para el arrastre
  const draggableRef = useSignal<HTMLElement>();
  // 2.- Almacenamos el valor del estado del arrastre (dragstart / dragend)
  const dragStatus = useSignal('A la espera de arrastrar para cambair de estado');
 
  useVisibleTask$(({ cleanup }) => {
    if (draggableRef.value) {
      // 3.- Usamos la API de DOM para añadir el escuchador de eventos (event listener).
      const dragstart = () => (dragStatus.value = 'dragstart');
      const dragend = () => (dragStatus.value = 'dragend');
 
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
        { dragStatus.value === 'dragstart' ? 'Arrastrando :)' : '¡¡Arrastrame!!'}
      </button>
      <p>{dragStatus.value}</p>
    </div>
  );
})