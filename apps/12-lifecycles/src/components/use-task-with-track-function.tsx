import { component$, useSignal, useTask$ } from '@builder.io/qwik';

import { isServer } from '@builder.io/qwik/build';

export const UseTaskWithTrackFunction = component$(() => {
    const counter = useSignal(0);
    // (1) Añadimos el valor para hacer los cambios con el resultado de counter
    const result = useSignal(``);
    
    useTask$(async ({ track }) => {
    // (2) Tarea observando el estado con `track` del valor counter.value
    // y a su vez se usa para comprobar su valor y asignar el resultado 
    // si es PAR o IMPAR
    track(() => {
        result.value = `El valor ${counter.value} es ${
        counter.value % 2 === 0 ? 'PAR' : 'IMPAR'
        }`;
    });

    // Hacemos un pequeño cambio para que se muestre el valor 0 del contador 
    // en el registro de la consola del servidor
    console.log(
        `${isServer ? 'SERVIDOR' : 'NAVEGADOR'}: Contador (${counter.value}) ${
        !isServer
            ? '- Re-ejecución dada por click en +1, esto se muestra en consola del navegador'
            : ''
        }`
    );


    // (3) Añadimos abajo el h4 para visualizar el resultado
    });

    return (
    <>
        <div>Probando useTask$() observando cambios con use de función</div>
        <button onClick$={() => counter.value++}>Click para +1</button>
        <h3>Valor actual: {counter.value}</h3>
        <h4>Resultado: {result.value}</h4>
    </>
    );
});