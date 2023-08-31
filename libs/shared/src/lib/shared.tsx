import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './shared.css?inline';

export const Shared = component$(() => {
  useStylesScoped$(styles);

  return <>Shared works!</>;
});
