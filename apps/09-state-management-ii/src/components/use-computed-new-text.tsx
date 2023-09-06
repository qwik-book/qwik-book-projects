import {
  component$,
  useComputed$,
  useSignal,
  useStyles$,
} from '@builder.io/qwik';

export const UseComputedNewText = component$(() => {
  useStyles$(`
    button {
      background: red;
    }
  `);
  const namesList = [
    { name: 'Anartz', lastname: 'Mugika' },
    { name: 'Ruslan', lastname: 'González' },
    { name: 'Bezael', lastname: 'Pérez' },
    { name: 'Leifer', lastname: 'Mendez' },
  ];
  const indexSelect = useSignal(0);
  const nameLastnameText = useComputed$(
    () =>
      `${namesList[indexSelect.value].name} ${
        namesList[indexSelect.value].lastname
      }`
  );

  return (
    <>
      <h1>
        3.- Use State Management - useComputed$ - Combinación de textos 👋
      </h1>
      <p>
        Valor índice para seleccionar persona con <code>useSignal</code>:{' '}
        {indexSelect.value}
      </p>
      <p>
        Valor con <code>useComputed$</code>: {nameLastnameText.value}
      </p>
      <button
        onClick$={() => {
          indexSelect.value =
            indexSelect.value === namesList.length - 1
              ? 0
              : indexSelect.value + 1;
        }}
      >
        {' '}
        + 1
      </button>
    </>
  );
});
