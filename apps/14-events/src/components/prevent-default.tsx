import { component$ } from "@builder.io/qwik";

export const PreventDefault =  component$(() => {
    return (
      <a
        href="/about"
        preventdefault:click // Esto va a evitar el comportamiento predeterminado del evento "click" (no ejecutándose)
        onClick$={() => {
          // event.PreventDefault() no funcionará aquí, por estar el manejador de manera asíncrona.
          alert('Do something else to simulate navigation...');
        }}
      >
        Go to about page
      </a>
    );
  });