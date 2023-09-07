// 1: Importamos el elemento Slot para proyecciones
import { Slot, component$ } from '@builder.io/qwik';

// 2 Componente (Hijo) donde proyectaremos lo que pasamos desde el padre a "Slot"
const Button = component$(() => {
  return (
    <button>
      Lo que se proyecta: <Slot />
    </button>
  );
});

export const BasicSlotMoreExamples = component$(() => {
  return (
    <>
      <Button>
        Contenido dentro del componente {'<Button>'} marcado con el elemento{' '}
        {`<Slot>`}
      </Button>
      <Button>Contenido 2</Button>
      <Button>Contenido 3 con {'<Button>'} probando variantes</Button>
      <Button>Otra variante</Button>
    </>
  );
});

export const BasicSlot = component$(() => {
  return (
    <Button>
      Contenido dentro del componente {'<Button>'} marcado con el elemento{' '}
      {`<Slot>`}
    </Button>
  );
});
