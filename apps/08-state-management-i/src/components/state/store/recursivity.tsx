import { component$, useStore } from '@builder.io/qwik';

export const StoreRecursivity = component$(() => {
  const store = useStore({
    name: 'Anartz', // (1) - Top Level
    lastName: 'Mugika Ledo', // (2) - Top Level
    otherData: { hobbies: 'not tracked' }, // (3) - Nested Level (No top). Por defecto SI actualiza
  });
  return (
    <>
      <ul>
        <li>
          {store.name} {store.lastName} (SI CAMBIA)
        </li>
        <li>Hobbies: {store.otherData.hobbies} (SI CAMBIA)</li>
      </ul>
      <button onClick$={() => (store.otherData.hobbies = 'tracked')}>
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
