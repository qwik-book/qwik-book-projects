import { component$, Slot } from "@builder.io/qwik";
import PrincipalFooter from 'libs/core/src/lib/components/footer';
import PrincipalHeader from 'libs/core/src/lib/components/header';
import { Header } from "./../../components/core/header";

export default component$(() => {
  return (
    <>
        <PrincipalHeader />
      <Header />
      <section class="row">
        <Slot />
      </section>
      <PrincipalFooter />
    </>
  );
});