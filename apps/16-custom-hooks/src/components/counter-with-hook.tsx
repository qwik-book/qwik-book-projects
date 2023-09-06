import { component$, useStyles$ } from '@builder.io/qwik';


// 1.- Importamos el custom hook
import {useCounter} from './../hooks/useCounter';

export const CounterWithHook = component$(() => {
  useStyles$(`
    .current-value {
      font-size: x-large
    }
  `);
  // 2.- Iniciamos el custom hook
  const {changeValue, reset, counter} = useCounter(0);
  return (
    <>
      <h1>2.- Contador - usando hook useCounter</h1>
      <p>Ejecuta una de las tres opciones para sumar (+1), restar (-1) o hacer un reset (0)</p>
      <p>Valor Actual: <span class="current-value">{counter.value}</span></p>
      <p><button onClick$={() => changeValue(true)}>+1</button> &nbsp; <button onClick$={() => changeValue(false)}>-1</button> &nbsp; <button onClick$={reset}>RESET</button></p>
    </>
  );
});
