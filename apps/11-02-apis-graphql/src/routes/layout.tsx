import { component$, Slot } from '@builder.io/qwik';
import Footer from 'libs/core/src/lib/components/footer';
import Header from 'libs/core/src/lib/components/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});
