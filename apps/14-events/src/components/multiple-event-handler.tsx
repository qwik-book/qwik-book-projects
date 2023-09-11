import { component$, useSignal, $ } from '@builder.io/qwik';

export const MultipleEventHandler = component$(() => {
  const count = useSignal(0);
  const lastUpdate = useSignal(new Date().toISOString())
  const eventTwo = $(() => console.log('Event Two with action'));
  return (
    <>
      <button
        onClick$={[
          $(() => count.value++), // 1
          eventTwo /*2*/,
          $(() => { // 3
              lastUpdate.value = new Date().toISOString();
              console.log(lastUpdate.value, 'Working with events - Multiple Handlers');
          }),
        ]}
      >
        Increment {count.value}
      </button> <span>Last update: {lastUpdate.value}</span>
    </>
  );
});
