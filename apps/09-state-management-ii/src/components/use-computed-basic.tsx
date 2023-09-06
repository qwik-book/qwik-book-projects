import { component$, useComputed$, useSignal, useStyles$ } from '@builder.io/qwik';

export const UseComputedBasic = component$(() => {
  useStyles$(`
    button {
      background: red;
      color: white;
      border-radius: 1rem;
      font-size: 2rem;
    }
  `);
  // 2.- Iniciamos el valor del contador en 0
  const valueCounter = useSignal(1);

  // 3.- Definimos el valor que se obtiene con
  // useComputed$, cada vez que cambie `valueCounter`
  const doubleValueCounter = useComputed$(() => valueCounter.value * 2);
  return (
    <>
      <h1>1.- Use State Management - useComputed$ - Básico 👋</h1>
      <p>
        Valor con <code>useSignal</code>: {valueCounter.value}
      </p>
      <p>
        Valor con <code>useComputed$</code>: {doubleValueCounter.value}
      </p>
      <button onClick$={() => valueCounter.value++}> + 1</button>
    </>
  );
});

