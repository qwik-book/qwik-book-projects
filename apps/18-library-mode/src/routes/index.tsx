import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Counter, Logo } from '..';
import { Hello } from '../components/hello';

export default component$(() => {
  return (
    <div>
      <h2>Example components</h2>
        <h4>Created by: Anartz Mugika Ledo</h4>
        <h4><code>{`<Logo />`}</code> component</h4>
        <Logo
          url='https://qwik.builder.io/'
          alt='Qwik Logo'
          width={400}
          height={147}
          image='https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F667ab6c2283d4c4d878fb9083aacc10f'
        />
        <h4><code>{`<Counter />`}</code> component with <code>{`useCounter`}</code> custom hook</h4>
        <Counter />
        <br/><br/><br/>
        <Hello />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Book - Proyectos",
  meta: [
    {
      name: "description",
      content:
        "Trabajando con los diferentes proyectos del libro de Qwik en Español",
    },
    {
      name: "keywords",
      content: "qwik, qwik-book",
    },
    {
      name: "author",
      content: "Anartz Mugika Ledo",
    },
    {
      name: "og:image",
      content:
        "https://jgengle.github.io/Leaflet/examples/quick-start/thumbnail.png",
    },
    {
      name: "og:url",
      content: "https://github.com/qwik-book/qwik-book-projects",
    },
    {
      name: "twitter:image",
      content:
        "https://jgengle.github.io/Leaflet/examples/quick-start/thumbnail.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Qwik - El libro",
    },
    {
      name: "twitter:description",
      content:
        "Aprende Qwik desde 0 paso a paso aplicando conceptos teórico-prácticas hasta publicar nuestros proyectos",
    },
  ],
};
