import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class='logo'>
        <a href='https://qwik.builder.io/' target='_blank'>
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a
            href='https://anartz-mugika.com'
            target='_blank'
            title='Mi página personal'
          >
            Página Personal
          </a>
        </li> / 
        <li>
          <a
            href='https://twitter.com/mugan86'
            target='_blank'
            title='Twitter Anartz Mugika Ledo'
          >
            Twitter
          </a>
        </li> / 
        <li>
          <a
            href='https://github.com/mugan86'
            target='_blank'
            title='Proyectos en Github'
          >
            Github
          </a>
        </li> / 
        <li>
          <a
            href='https://github.com/qwik-book/qwik-book-projects'
            target='_blank'
            title='Proyectos en Github'
          >
            Repositorio Libro
          </a>
        </li> / 
        <li>
          <a href='https://youtube.com/mugan86' target='_blank' title='Youtube'>
            Youtube
          </a>
        </li>
        <li>
          <a
            href='https://udemy.com/user/anartzmugika'
            target='_blank'
            title='Cursos Online Anartz Mugika'
          >
            Udemy
          </a>
        </li> / 
        <li>
          <a
            href='https://mugan86.medium.com/'
            target='_blank'
            title='Artículos técnicos sobre Angular, Qwik, Python,...'
          >
            Blog Tech - Medium
          </a>
        </li>
      </ul>
    </header>
  );
});
