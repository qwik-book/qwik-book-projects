import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';

export const UseTaskWithTrack = component$(() => {
    // (1) Iniciamos el estado del contador a 0
    const counter = useSignal(0);

    // (2) Añadimos la tarea, que en este caso lo haremos observando
    // Los cambios del valor de counter, mediante track(() => counter.value)
    useTask$(async ({ track }) => {
    // (3) Tarea observando el estado con `track` del valor counter.value.
    // En la primera renderización se suscribe a escuchar cambios
    track(() => counter.value);

    // (4) Log que se muestra la primera renderización, desde el servidor

    // y en cada re-ejecución por cambio en el valor observado (counter.value)
    console.log(
        'Esto se ejecuta cada vez que se monta el componente en Servidor o Navegador'
    );

    // 5.- Comprueba si no está ejecutándose del servidor para mostrar el registro
    !isServer &&
        console.log(
        `Contador (${counter.value}) - Re-ejecución dada por click en +1, esto se muestra en consola del navegador`
        );
    });
    return (
    <>
        <div>Probando useTask$() observando cambios</div>
        <button onClick$={() => counter.value++}>+1</button>
        <h2>Valor actual: {counter.value}</h2>
    </>
    );
});