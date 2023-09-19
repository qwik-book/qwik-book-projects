import { component$, useOn, $, useStyles$ } from '@builder.io/qwik';

export const UseOnExample = component$(() => {
  useStyles$(
    `
          .useon {
            border: 2px solid red;
            height: 300px
          }
        `
  );
  useOn(
    'click',
    $(() => alert('Hola Mundo con useOn'))
  );

  return <p class='useon'>App Component. Haz click sobre mí.</p>;
});
