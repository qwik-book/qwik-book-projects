import { component$ } from '@builder.io/qwik';
import { useGeolocation } from './../hooks/useGeolocation';

export const OurLocation = component$(() => {
  // 1.- Uso de nuestro hook para detectar nuestra posición
  const { geoFindMe, location } = useGeolocation();
  // 2.- Posición latitud / longitud después de darle permisos
  return (
    <div>
      <h1>5.- Hook useGeolocation</h1>
      <p>
        Posición: ({location.value.latitude}, {location.value.longitude})
      </p>
      <p>
        {location.value.text !== ''
          ? location.value.text
          : location.value.error !== ''
          ? location.value.error
          : ''}
      </p>
      <button onClick$={geoFindMe}>Busca donde estoy</button>
    </div>
  );
});
