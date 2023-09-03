import { component$, Slot } from '@builder.io/qwik';
import { Header } from '../components/core/header';
import { Footer } from '../components/core/footer';


export default component$(() => {
  return <>
  <Header />
  <Slot />
  <Footer />
  </>;
});
