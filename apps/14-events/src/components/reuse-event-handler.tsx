import { component$, useSignal, $ } from '@builder.io/qwik';

export const ReuseEventHandler = component$(() => {
  const count = useSignal(0);
  const increment = $(() => count.value++);
  return (
    <>
      <button onClick$={increment}>+1</button>
      <button onClick$={increment}>+1 (Botón 2)</button>
      <div
        onMouseEnter$={increment}
        style='height: 100px; width: 400px; background-color: blue'
      >
        Poner el cursor del ratón sobre el cuadro azul para hacer + 1
      </div>
      <p>Valor actual: {count.value}</p>
    </>
  );
});
