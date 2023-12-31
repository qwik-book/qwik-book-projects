import { component$, useStore } from '@builder.io/qwik';

export const StoreNORecursivity = component$(() => {
  const store = useStore({
    name: 'Anartz', // (1) - Top Level
    lastName: 'Mugika Ledo', // (2) - Top Level
    otherData: { hobbies: 'wait...' }, // (3) - Nested Level (No top) - No detecta cambios
  }, {deep: false});

  return (
    <>
      <ul>
        <li>
          {store.name} {store.lastName} (Esto SI cambia)
        </li>
        <li>Hobbies: {store.otherData.hobbies} (NO cambia)</li>
      </ul>
      <button onClick$={() => (store.otherData.hobbies = 'value changes!')}>
        Click me to change hobbies
      </button>
      &nbsp;
      <button
        onClick$={() => {
          store.name = 'Anartz----';
          store.lastName = 'Mugika_Ledo';
        }}
      >
        Click me to change Principal
      </button>
    </>
  );
});