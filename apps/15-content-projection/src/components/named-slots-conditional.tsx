import { component$, Slot, useStore } from '@builder.io/qwik';

export const NamedSlotsConditional = component$(() => {
  console.log('Render: <App>');
  return (
    <Collapsable>
      <div q:slot="closed">▶ Haz click para ver su contenido</div>
      <div q:slot="open">
        ▼<div> Contenido del collapsable visible por estar en estado abierto</div>
      </div>
    </Collapsable>
  );
});

export const Collapsable = component$(() => {
  console.log('Render: <Collapsable>');
  const store = useStore({ open: true });
  return (
    <div onClick$={() => (store.open = !store.open)}>
      {store.open ? <Slot name="open" /> : <Slot name="closed" />}
    </div>
  );
});