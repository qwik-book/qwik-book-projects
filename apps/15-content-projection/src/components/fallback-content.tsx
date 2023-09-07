import { component$, Slot, useStyles$ } from '@builder.io/qwik';

export const Card = component$(() => {
  useStyles$(CSS);
  return (
    <article class="card">
      <header class="title">
        <Slot name="title"></Slot>
      </header>
      <section class="body">
        <Slot name="body"></Slot>
      </section>
    </article>
  );
});

export const FallbackContent = component$(() => {
    return (
        <>
            <Card>
                <span q:slot="title">Qwik</span>
                <span q:slot="body">Qwik es un framework reanudable para construir aplicaciones web instantáneas.</span>
                </Card>
                <Card>
                <span q:slot="title">Qwik - Curso en Español</span>
                <span q:slot="body">
                Curso paso a paso para aprender Qwik gracias a Anartz Mugika Ledo. Más información:
                <br/>
                <a href="https://medium.com/@mugan86/list/qwik-paso-a-paso-desde-0-al-detalle-e7df8b471166" target='_blank'>Curso Qwik</a>
                </span>
            </Card>
            <Card>
                <span q:slot="title">Partytown</span>
            </Card>
            <Card>
                <span q:slot="body">
                Builder.io te permite construir visualmente en tu stack tecnológico. Capacita a todo tu equipo para crear y optimizar experiencias de alta velocidad en tus sitios y aplicaciones. Brinda autonomía a todo el equipo con una plataforma aprobada por los desarrolladores.
                </span>
            </Card>
      </>
    );
  });

export const CSS = `
  .card {
    border-radius: 5px;
    vertical-align: top;
    display: inline-block;
    border: 1px solid grey;
    width: 200px;
    margin: .5em;
  }

  .title {
    background-color: lightgray;
    padding: 0.5em;
    border-bottom: 1px solid black;
  }

  .body {
    padding: 0.5em;
  }
  
.title:empty::before {
    content: 'Debes de añadir un título con q:slot="title"';
    color: red;
}
.body:empty::before {
    content: 'Debes de añadir un contenido con q:slot="body"';
    color: orange;
}
`;