import { component$, useSignal } from '@builder.io/qwik';

export const CurrentTarget = component$(() => {
  const targetElement = useSignal<HTMLElement>();
  const currentElement = useSignal<HTMLElement>();
  return (
    <section
      onClick$={(event, currentTarget) => {
        currentElement.value = currentTarget;
        targetElement.value = event.target as HTMLElement;
      }}
    >
      Haga clic en cualquier texto <code>target</code> y{' '}
      <code>currentElement</code> (SIEMPRE será SECTION) del evento por ser donde se realiza el click siempre.
      <hr />
      <p>
        ¡Hola <b>Mundo</b>!
      </p>
      <hr />
      <ul>
        <li>
          Elemento actual (Current Element): {currentElement.value?.tagName}
        </li>
        <li>
          Elemento objetivo (Target Element): {targetElement.value?.tagName}
        </li>
      </ul>
    </section>
  );
});
