import { component$, useStyles$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

// el componente de NPM ya convertido en Qwik
import { QDayPickerReact } from "./../integrations/react/date-picker";

// Estilos del componente que acabamos de incluir en el proyecto
import dayPickerStyles from "./../../../../node_modules/react-day-picker/dist/style.css?inline";

// Combinamos los estilos y el componente de Qwik
export const DayPickerQwik = component$(() => {
    useStyles$(dayPickerStyles);
    return <QDayPickerReact />;
});

export default component$(() => {
    return (
      <div class="container center">
        <h2>Trabajando con un paquete NPM - React Day Picker</h2>
        <DayPickerQwik />
      </div>
    );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
