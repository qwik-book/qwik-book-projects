import { component$, useSignal, $ } from '@builder.io/qwik';

export const MultipleEventHandler = component$(() => {
  const count = useSignal(0);
  // 1.- Añadimos el valor de última actualziación
  const lastUpdate = useSignal(new Date().toISOString());
  const eventTwo = $(() => console.log('Event Two with action'));
  return (
    <>
      <button
        onClick$={[
          $(() => count.value++), // 2
          eventTwo /* 3 - Usando la función desacoplada */,
          $(() => {
            // 4
            // Actualizamos la fecha y hora actual
            lastUpdate.value = new Date().toISOString();
            // Registramos mensaje en la consola
            console.log(
              lastUpdate.value,
              'Trabajando con eventos - Multiple Handlers / Manejador de eventos múltiple'
            );
          }),
        ]}
      >
        Incrementar: {count.value}
      </button>{' '}
      <span>Última actualización: {lastUpdate.value}</span>
    </>
  );
});
