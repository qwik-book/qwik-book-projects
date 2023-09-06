import {
  component$,
  useComputed$,
  useSignal,
  useStyles$,
} from '@builder.io/qwik';

export const UseComputedToUpperCase = component$(() => {
  useStyles$(`
    button {
      background: red;
    }
  `);
  const namesList = ['anartz', 'ruslan', 'bezael', 'leifer mendez'];
  const indexSelect = useSignal(0);
  const nameSelectUppercase = useComputed$(() =>
    namesList[indexSelect.value].toUpperCase()
  );

  return (
    <>
      <h1>
        2.- Use State Management - useComputed$ - Convertir a mayúscula cadena
        de texto 👋
      </h1>
      <p>
        Valor con <code>useSignal</code>: {namesList[indexSelect.value]}
      </p>
      <p>
        Valor con <code>useComputed$</code>: {nameSelectUppercase.value}
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
