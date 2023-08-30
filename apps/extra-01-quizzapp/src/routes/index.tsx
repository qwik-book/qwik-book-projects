import { component$, useSignal, useTask$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { QUESTIONS } from '../data/world-flags-questions';

export default component$(() => {
  const answers = useSignal<Array<any>>([]);
  const question = useSignal<>(null);
  const selectOption = $((option: string | number) => {
    console.log(option);
    // this.isCorrect = answers[option].isCorrect;
  });

  const answerOrderDefine = $(() => {
    let order = [0, 1, 2, 3];
    return order.sort(() => Math.random() - 0.5);
  });

  useTask$(async () => {
    // if (isServer) { return; }
    console.log(QUESTIONS);

    const selectQuestion = Math.floor(Math.random() * QUESTIONS.length);
    const orderElements = await answerOrderDefine();
    console.log(orderElements);
    /*answers.value = [];*/
    answers.value = (await answerOrderDefine()).map((item) => {
      return QUESTIONS[selectQuestion].answers[item];
    });

    console.log(selectQuestion, QUESTIONS.length, answers.value);
    // QUESTIONS.map((data: any) => console.log(data))
    console.log(QUESTIONS[selectQuestion].content);
    question.value = QUESTIONS[selectQuestion];
  });
  return (
    <div>
      <h1> Flag Quiz</h1>
      <p>El juego consiste en seleccionar una opción válida</p>
      {question.value ? (
        <div class='container'>
          <div class='question'>
            <img src={question.value['content']} />
          </div>
          {answers.value.length
            ? answers.value.map((item, index) => {
                return (
                  <div class='flex-container'>
                    <div
                      class='answer'
                      onClick$={() => console.log('click ', index)}
                    >
                      {item['content']}
                    </div>
                  </div>
                );
              })
            : undefined}
        </div>
      ) : undefined}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Book - Quizz App',
  meta: [
    {
      name: 'description',
      content:
        'Trabajando con los diferentes proyectos del libro de Qwik en Español',
    },
    {
      name: 'keywords',
      content: 'qwik, qwik-book,quiz-app',
    },
    {
      name: 'author',
      content: 'Anartz Mugika Ledo',
    },
    {
      name: 'og:image',
      content:
        'https://jgengle.github.io/Leaflet/examples/quick-start/thumbnail.png',
    },
    {
      name: 'og:url',
      content: 'https://github.com/qwik-book/qwik-book-projects',
    },
    {
      name: 'twitter:image',
      content:
        'https://jgengle.github.io/Leaflet/examples/quick-start/thumbnail.png',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: 'Qwik - El libro',
    },
    {
      name: 'twitter:description',
      content:
        'Aprende Qwik desde 0 paso a paso aplicando conceptos teórico-prácticas hasta publicar nuestros proyectos',
    },
  ],
};
