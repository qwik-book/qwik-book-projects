import { component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { GameStore } from './../models/game';
import Choices from './../components/game/choices';
import { Title } from './../components/game/title';
import { ScoreBoard } from './../components/game/score-board';

export default component$(() => {
  const game = useStore<GameStore>({
    data: {
      result: 'Waiting for the first play...',
      pointsUser: 0,
      pointsComp: 0,
    },
    choices: {
      imageProperties: {
        width: 100,
        height: 100,
      },
      rock: {
        img: '/img/rock.png',
        alt: 'Rock Image',
      },
      paper: {
        img: '/img/paper.png',
        alt: 'Pape Image',
      },
      scissors: {
        img: '/img/scissors.png',
        alt: 'Scissors Image',
      },
    },
  });

  return (
    <>
      <Title />
      <ScoreBoard user={game.data.pointsUser} computer={game.data.pointsComp} />

      <p class='info-game'>{game.data.result}</p>

      <Choices game={game} />

      <p class='info-game'>Select your play</p>
    </>
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
