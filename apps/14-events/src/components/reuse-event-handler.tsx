import { component$, useSignal, $ } from '@builder.io/qwik';

export const ReuseEventHandler = component$(() => {
  const count = useSignal(0);
  const increment = $(() => count.value++);
  return (
    <>
      <button onClick$={increment}>Increment</button>
      <button onClick$={increment}>Increment (Button 2)</button>
      <div
        onMouseEnter$={increment}
        style='height: 100px; width: 400px; background-color: blue'
      >
        Put cursor hover me to increment counter
      </div>
      <p>Count: {count.value}</p>
    </>
  );
});
