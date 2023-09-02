import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const PlusInfoSecond = component$(() => {
    return (
      <div class="plus-info">
        <div>More info...</div>
      </div>
    );
  });
export default component$(() => {
  return (
    <div>
      <h1>Second page</h1>
      <p>Content second page</p>
      <PlusInfoSecond />
      <Link href="/">Home Page (SPA)</Link>&nbsp;/&nbsp;
      <a href="/">Home Page (MPA) - Recarga de nuevo todo</a>
    </div>
  );
});