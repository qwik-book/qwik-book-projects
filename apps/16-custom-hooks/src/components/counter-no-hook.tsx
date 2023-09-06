import { component$, useSignal, useStyles$ } from '@builder.io/qwik';

export const CounterNoHook = component$(() => {
  useStyles$(`
    .current-value {
      font-size: x-large
    }
  `);
  // const {changeValue, reset, counter} = useCounter(0);

  const counter = useSignal(0);

  return (
    <>
      <h1>1.- Contador - sin usar custom hook</h1>
      <p>
        Ejecuta una de las tres opciones para sumar (+1), restar (-1) o hacer un
        reset (0)
      </p>
      <p>
        Valor Actual : <span class='current-value'>{counter.value}</span>
      </p>
      <button onClick$={() => counter.value++}>+1</button>&nbsp;
      <button onClick$={() => counter.value--}>-1</button>&nbsp;
      <button onClick$={() => (counter.value = 0)}>Reset</button>
    </>
  );
});
