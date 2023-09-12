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
      Click on any text <code>target</code> and <code>currentElm</code> of the
      event.
      <hr />
      <p>
        Hello <b>World</b>!
      </p>
      <hr />
      <ul>
        <li>Current Element: {currentElement.value?.tagName}</li>
        <li>Target Element: {targetElement.value?.tagName}</li>
      </ul>
    </section>
  );
});
