import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from '@builder.io/qwik-city';

import PrincipalFooter from 'libs/core/src/lib/components/footer';
import PrincipalHeader from 'libs/core/src/lib/components/header';
import { Header } from './../components/core/header';
import { Menu } from './../components/core/menu';
import { Footer } from './../components/core/footer';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <>
      <main>
        <PrincipalHeader />
        <section>
          <Header />
          <section class='row'>
            <Menu />
            <div class='column content'>
              <Slot />
            </div>
          </section>
          <Footer />
        </section>
      </main>
      <PrincipalFooter />
    </>
  );
});
