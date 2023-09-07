import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';

export const UseTaskDomElementsWithIsServer = component$(() => {
  // 2.- Título inicial
  const message = useSignal('Cuando pusamos el botón, esperamos 1.5sg hasta ejecutar cambio en el título');

  useTask$(({track, cleanup}) => {

    // 3.- Re-ejecutamos al cambiar el valor de message
    track(( () => message.value));

    // 4.- Nos aseguramos, que en el caso de estar ejecutándose en el servidor, pare aquí.
    // Con esto, ya nos aseguramos que en la etapa 1, se pare aquí.
    if (isServer) {
      console.log('Esperamos 1.5sg hasta ejecutar en el navegador el cambio')
      return;
    }

    // 5.- Con esto nos aseguramos que si ya ha sido cambiado el mensaje una vez, no se vuelva a ejecutar
    if (message.value === '') {
      return;
    }

    // 6.- Se ejecuta cuando tengamos message.value = 'Esperando a nuevo título...'
    const id = setTimeout(() => {
      console.log('Asignado el texto de la tecnología');
      message.value = '';

      // 7.- Asigna mediante DOM el nuevo título al id "title"
      // Aquí ya estamos haciendo uso del navegador y elementos como "document" y "window"
      document.getElementById('title')!.textContent = 'Nuevo título al pulsar botón';

    }, 1500);
  
    cleanup(() => {
        console.log('Entrado a limpiar timer');
        clearTimeout(id);
    });
  })
  return (
    <>
      <h5 id="title">{message.value}</h5>
      <button onClick$={() => message.value = 'Esperando a nuevo título...'}>Dame el nuevo título con esta acción</button>
    </>
  );
});