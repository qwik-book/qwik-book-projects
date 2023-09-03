import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <div class="container mt-2">
        <h1 class="page-title">Proyectos desarrollados en Qwik</h1>
        <hr />
      </div>
      <div class="container mt-2">
        <section class="projects">
          <div class="container">
            <div class="testimonial grid-3">
              <div class="card">
                <div class="circle">
                  <img
                    src="/img/profile/men_programmer.webp"
                    alt=""
                    width="192"
                    height="192"
                  />
                </div>
                <h3>Content Projection</h3>
                <p class="text-body">
                  I have learnt web development using this platfrom and I am
                  going to say this is the best platform for learning.
                  Absolutely worth the investment!
                </p>
                <button
                  class="btn"
                  onClick$={() =>
                    window.open(
                      'https://qwik-slot-content-projection.netlify.app/',
                      '_blank',
                    )
                  }
                >
                  Ver más
                </button>{' '}
              </div>
              <div class="card">
                <div class="circle">
                  <img
                    src="/img/profile/qwik.webp"
                    alt=""
                    width="192"
                    height="192"
                  />
                </div>
                <h3>State Management</h3>
                <p class="text-body">
                  I have learnt copywriting using this platfrom and I am going
                  to say this is the best platform for learning. Absolutely
                  worth the investment!
                </p>
                <button
                  class="btn"
                  onClick$={() =>
                    window.open(
                      'https://qwik-state-management.netlify.app/',
                      '_blank',
                    )
                  }
                >
                  Ver más
                </button>
              </div>
              <div class="card">
                <div class="circle">
                  <img
                    src="/img/projects/map.webp"
                    alt=""
                    width="192"
                    height="192"
                  />
                </div>
                <h3>OpenStreetMap - POIs</h3>
                <p class="text-body">
                  I have learnt affilitate marketing using this platfrom and I
                  am going to say this is the best platform for learning.
                  Absolutely worth the investment!
                </p>
                <button
                  class="btn"
                  onClick$={() =>
                    window.open('https://qwik-osm-poc.netlify.app/', '_blank')
                  }
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Proyectos',
  meta: [
    {
      name: 'description',
      content: 'Lista de proyectos desarrollados en Qwik',
    },
  ],
};
