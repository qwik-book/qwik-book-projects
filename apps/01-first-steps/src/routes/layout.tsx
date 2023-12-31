import { component$, Slot } from '@builder.io/qwik';
import Footer from 'libs/core/src/lib/components/footer';
import Header from 'libs/core/src/lib/components/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <h2>Curso Qwik - Primeros pasos</h2>
          <div style='border: 3px dotted green; margin: 1rem; padding: 1rem'>
            <Slot />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
});
