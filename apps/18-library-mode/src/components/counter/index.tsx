import { component$ } from '@builder.io/qwik';
// Importamos el custom hook
import {useCounter} from '../../hooks/useCounter';

export const Counter = component$(() => {
  // Iniciamos el custom hook y obtenemos el valor de estado y las funciones
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <h4>Counter current value : {counter.value}</h4>
      <button onClick$={increment}>+1</button>&nbsp; 
      <button onClick$={decrement}>-1</button>&nbsp;
      <button onClick$={reset}>Reset</button>
    </>
  );
});
