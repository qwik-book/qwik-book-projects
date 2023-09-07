import { component$, useTask$ } from '@builder.io/qwik';
    
export const UseTaskOnMount = component$(() => {
    
    useTask$(async () => {
    // Tarea sin observar el estado con `track` simulando el hook OnMount.
    console.log(
        'Esto se ejecuta cada vez que se monta el componente en Servidor o Navegador'
    );
    });
    
    return <div>Probando useTask$() sin observar cambios - Simulando OnMount</div>;
});