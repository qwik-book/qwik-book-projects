import { component$, useSignal } from '@builder.io/qwik';

export const InlineHandler = component$(() => {
  const count = useSignal(0);

  return (
    <button onClick$={() => count.value++}>Increment {count.value}</button>
  );
});
