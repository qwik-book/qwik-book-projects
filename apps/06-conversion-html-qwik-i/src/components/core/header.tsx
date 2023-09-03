import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';

export const Header = component$(() => {
  const location = useLocation();
  
  return (
    <div class='navbar'>
      <div class='container flex'>
       ...
        <nav>
          <ul>
            <li class='nav'>
              <Link href="/" class={location.url.pathname === '/' ? 'outline active' : 'outline'}>
                Inicio
              </Link>
            </li>
            <li class='nav'>
              <Link href="/chapters" class={location.url.pathname === '/chapters/' ? 'outline active' : 'outline'}>
                Capítulos
              </Link>
            </li>
            <li class='nav'>
              <Link href="/projects" class={location.url.pathname === '/projects/' ? 'outline active' : 'outline'}>
                Proyectos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
});