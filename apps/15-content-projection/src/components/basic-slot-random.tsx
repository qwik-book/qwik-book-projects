// 1: Importamos el elemento Slot para proyecciones
import { Slot, component$, useSignal} from "@builder.io/qwik";

// 2 Componente (hijo) donde proyectaremos lo que pasamos desde el padre a "Slot"
const RandomPanel = component$(() => {
  console.log("Renderizado (Random Panel")
  return (
    <div>
      Lo que se proyecta: <Slot />
    </div>
  );
});

// 3 Componente principal que usa "RandomPanel" y pasa "Contenido..." para proyectarse dentro de "Slot"
export const RandomPanelContent = component$(() => {
  const minValue = 0;
  const maxValue = 20;
  const randomValue = useSignal(0);
  
  console.log("Renderizado (default)");
  return (
    <>
      <RandomPanel>
        Número: ({randomValue.value}) dentro del componente {'<Button>'} marcado con el elemento {`<Slot>`}
      </RandomPanel>
      <button onClick$={() => randomValue.value = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)}>
        Nuevo número
      </button>
    </>
  );
});