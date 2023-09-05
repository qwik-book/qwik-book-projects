import {
    Signal,
    component$,
    createContextId,
    useContext,
    useContextProvider,
    useSignal,
    useStore,
  } from '@builder.io/qwik';
  
  export const CONTEXT_ID = createContextId<{value: number}>('counter');
  
  export const First = component$(() => {
    // Creamos el contenedor con el valor del contador
    const counterSignal = useStore({value: 0});
    // Asignamos el valor (state = counterSignal) al contexto (CONTEXT_ID)
    useContextProvider(CONTEXT_ID, counterSignal);
  
    return (
      <div style='border: 1px solid red; padding: 10px; margin: 5px'>
        Info in Parent (Counter {counterSignal.value})
        <hr />
        <Second />
      </div>
    );
  });
  
  export const Second = component$(() => {
    const counter = useContext(CONTEXT_ID);
    return (
      <div style='border: 1px solid green;margin: 5px'>
        Second (Counter) : {counter.value}
        <br />
        <button onClick$={() => counter.value++}>+ 1</button>
        <br />
        <Third />
      </div>
    );
  });
  export const Third = component$(() => {
    const counter = useContext(CONTEXT_ID);
    return (
      <div style='border: 5px solid orange;margin: 5px'>
        <button onClick$={() => counter.value++}>+1</button>
        &nbsp;&nbsp;Count: {counter.value} (Third)
      </div>
    );
  });
  