import { component$ } from '@builder.io/qwik';

export const Footer = component$(() => {
  return (
    <footer>
      <div class="container grid">
        <div class="copyright">
          <span>Qwik Book</span> - Copyright &copy;{' '}
          <span id="currentYear">{new Date().getFullYear()}</span> - Anartz
          Mugika Ledo
        </div>
        <div class="profiles">
          <a href="https://twitter.com/mugan86" target="_blank">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/i.am.anartz/" target="_blank">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://www.youtube.com/mugan86" target="_blank">
            <i class="fab fa-youtube fa-2x"></i>
          </a>
          <a href="https://www.github.com/mugan86" target="_blank">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a href="https://mugan86.medium.com/" target="_blank">
            <i class="fab fa-medium fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
});
