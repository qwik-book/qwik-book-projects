import { component$, useStore } from '@builder.io/qwik';

export const StoreRecursivity = component$(() => {
  const store = useStore({
    name: 'Anartz', // Nivel superior (top)
    lastName: 'Mugika Ledo', // Nivel superior (top)
    otherData: { hobbies: 'wait...' },
    // hobbies => NO TOP
  });
  return (
    <>
      <ul>
        <li>
          {store.name} {store.lastName} (Esto SI cambia)
        </li>
        <li>Hobbies: {store.otherData.hobbies} (Esto SI cambia)</li>
      </ul>
      <button
        onClick$={() => (store.otherData.hobbies = 'read,sports,music,...')}
      >
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

export const StoreRecursivityArray = component$(() => {
  const store = useStore({
    name: 'Anartz',
    lastName: 'Mugika Ledo',
    otherData: { hobbies: ['football', 'read', 'music'] }, // <====
  });
  return (
    <>
      <ul>
        <li>
          {store.name} {store.lastName} (Esto SI cambia)
        </li>
        <li>Hobbies: {store.otherData.hobbies.toString()} (Esto SI cambia)</li>
      </ul>
      <button
        onClick$={() =>
          (store.otherData.hobbies = ['basket', 'photography', 'write'])
        }
      >
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

export const StoreRecursivityArrayTwo = component$(() => {
  const store = useStore({
    name: 'Anartz',
    lastName: 'Mugika Ledo',
    otherData: { hobbies: ['football', 'read', 'music'] }, // <====
  });
  return (
    <>
      <ul>
        <li>
          {store.name} {store.lastName} (Esto SI cambia)
        </li>
        <li>Hobbies: {store.otherData.hobbies.toString()} (Esto SI cambia)</li>
      </ul>
      <button onClick$={() => (store.otherData.hobbies[0] = 'running')}>
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

export const StoreRecursivityArrayThree = component$(() => {
  const store = useStore({
    name: 'Anartz',
    lastName: 'Mugika Ledo',
    otherData: { hobbies: ['football', 'read', 'music'] }, // <====
  });
  return (
    <>
      <ul>
        <li>
          {store.name} {store.lastName} (Esto SI cambia)
        </li>
        <li>Hobbies: {store.otherData.hobbies.toString()} (Esto SI cambia)</li>
      </ul>
      <button onClick$={() =>
              (store.otherData.hobbies.push('running'))}>
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