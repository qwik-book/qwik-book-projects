import { component$, useSignal } from '@builder.io/qwik';

export const BasicSignal = component$(() => {
  // Inicia con un valor aleatorio
  const randomValue = useSignal(Math.random());
  return (
    <>
      <button onClick$={() => (randomValue.value = Math.random())}>
        Obtener aleatorio
      </button>
      <p>Valor aleatorio actual: {randomValue.value}</p>
    </>
  );
});
