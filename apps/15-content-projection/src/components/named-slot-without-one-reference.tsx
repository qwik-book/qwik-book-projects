// 1: Importamos el elemento Slot para proyecciones
import { Slot, component$ } from '@builder.io/qwik';

// 2 Componente donde proyectaremos lo que pasamos desde el padre a los "Slot" que está referenciados por nombre
const Element= component$(() => {
  return (
    <>
      <h1><Slot name="title"/></h1>
      <p><Slot name="description" /></p>
    </>
  );
});

// 3 Componente principal que usa "Element" y pasa el contenido asignando a las ranuras
export const BasicNamedSlotNoAddReference = component$(() => {
  return (
    <Element>
      <span q:slot="title">Elemento título</span>
      <span q:slot="description">Elemento Descripción</span>
      <span>Elemento sin referencia q:slot</span>
    </Element>
  );
});