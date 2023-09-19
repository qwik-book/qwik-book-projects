import {
  component$,
  useOnWindow,
  $,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';

export const UseOnWindowScreensCountRefreshs = component$(() => {
  // 1.- Almacenamos el tamaño de la pantalla actual con tipo de pantalla y número de actualizaciones
  const actualScreenSize = useSignal({ x: 0, y: 0 });
  const screenName = useSignal("---");
  const refreshCount = useSignal(0);

  // 2.- Actualizar al estado que se encuentra la pantalla cuando inicia / redimensiona
  const updateScreenSize = $(() => {
    actualScreenSize.value = {
      x: window.innerWidth,
      y: window.innerHeight,
    };

    // Cada vz que hacemos una actualización +1
    refreshCount.value += 1;

    // Actualizar que tamaño de pantalla tiene

    if ( actualScreenSize.value.x < 600 ) {
      screenName.value = "SMALL";
    } else if (actualScreenSize.value.x >= 600 && actualScreenSize.value.x < 1025 ) {
      screenName.value = "MEDIUM";
    } else {
      screenName.value = "LARGE";
    }
  });

  // 3.- Al cargar, añadimos el tamaño inicial
  useVisibleTask$(() => {
    updateScreenSize();
  });

  // 4.- Redimensionando
  useOnWindow(
    'resize',
    $(() => {
      // Se ejecuta cuando la ventana se redimensiona
      updateScreenSize();
    })
  );

  // 5.- Se muestra
  return (
    <div>
      <h3>Redimensionar navegador para ver como se actualiza</h3>
      <p>
        Tamaño actual: {actualScreenSize.value.x}px (width) /{' '}
        {actualScreenSize.value.y}px (height) / Tipo de pantalla: {screenName.value} / Actualizaciones de tamaño efectuadas: { refreshCount.value}
      </p>
    </div>
  );
});
