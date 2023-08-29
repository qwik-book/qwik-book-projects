import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.css?inline';
export default component$(() => {
  useStylesScoped$(styles);
  return (
    <footer>
      <a href="https://www.builder.io/" target="_blank">
        Anartz Mugika Ledo - {new Date().getFullYear()}
      </a>
    </footer>
  );
});
