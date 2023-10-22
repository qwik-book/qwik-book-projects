import { component$, useStore } from "@builder.io/qwik";

export const Counter = component$(() => {
  const state = useStore({
    count: 0,
  });

  return (
    <>
      <button class="increment" onClick$={() => state.count++}>
        +
      </button>
      <div class="count">{state.count}</div>
    </>
  );
});