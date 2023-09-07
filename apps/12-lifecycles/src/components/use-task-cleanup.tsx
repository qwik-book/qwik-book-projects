import { component$, useSignal, useTask$ } from '@builder.io/qwik';

export const UseTaskCleanUp = component$(() => {
    // 1.- Lista de los valores que tenemos que se irán mostrando según posición
    const jsTechnlogies = ['Qwik Framework', 'Astro', 'Angular', 'React', 'Vue'];

    // 2.- Posición actual para seleccionar el valor de la lista
    const selectElement = useSignal(0);

    // 3.- Texto que se usará como duplicado que aparecerá al 1.5sg de cambiar
    // el valor de selectElement
    const debounceText = useSignal('Texto tecnología a espera de click');

    // 4.- Función con track y el nuevo elemento, cleanup
    useTask$(({ track, cleanup }) => {
    // 5.- Observamos los cambios de selectElement y usamos para seleccionar
    // de la lista el valor del array
    const value = track(() => jsTechnlogies[selectElement.value]);
    
    // 6.- Iniciar el timer para asignar "value" en debounceText al pasar 1.5sg
    const id = setTimeout(() => {
        console.log('Asignado el texto de la tecnología');
        debounceText.value = value;
    }, 1500);
    
    // 7.- Se ejecutará para limpiar el timerId iniciado al terminar la tarea
    // o al cancelarla
    cleanup(() => {
        console.log('Entrado a limpiar timer');
        clearTimeout(id);
    });
    });

    // 8.- El código que se va a renderizar
    return (
    <section>
        <label>Tecnología: {jsTechnlogies[selectElement.value]}</label>
        <br />
        <br />
        <button
        onClick$={() => {
            // 9.- Seleccionamos el valor para seleccionar texto.
            // Si llega a 4, se pasa a 0 en el siguiente click.
            selectElement.value =
            selectElement.value === 4 ? 0 : selectElement.value + 1;
        }}
        >
        Click - Seleccionar nueva tecnología
        </button>
        <p>Retardo (1500ms - 1.5sg) - Tecnología: {debounceText}</p>
    </section>
    );
});