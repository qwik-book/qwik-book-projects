import { component$ } from "@builder.io/qwik";

export const PreventDefault =  component$(() => {
    return (
      <a
      href="/about"
      preventdefault:click // Esto evitará el comportamiento de "click" en este caso, que sería navegar a "/about" después de mostrar la alerta de `onClick$`.
      onClick$={() => {
        alert('Haz algo más para simular la navegación...No podemos hacer nada debido a "preventdefault:click"');
      }}
      >
        Navegar a la página "about"
      </a>
    );
});