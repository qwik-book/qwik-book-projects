import { component$, Slot } from '@builder.io/qwik';
import Footer from 'libs/core/src/lib/components/footer';
import Header from 'libs/core/src/lib/components/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <div style='border: 4px dotted red; padding: 25px; margin-top: 1rem'>
          <p>
            <code>src/routes/layout.tsx</code>
          </p>
          <Slot />
        </div>
      </main>
      <Footer />
    </>
  );
});
