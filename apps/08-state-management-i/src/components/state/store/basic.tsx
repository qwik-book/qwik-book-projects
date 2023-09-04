import { component$, useStore } from '@builder.io/qwik';

export const BasicStore = component$(() => {
  const counterState = useStore({ count: 0 });
  return (
    <>
      <button onClick$={() => counterState.count++}>+ 1</button>
      Count: {counterState.count}
    </>
  );
});
