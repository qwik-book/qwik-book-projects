import { component$, useSignal, useStyles$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

// el componente de NPM ya convertido en Qwik
import { QDayPickerReact } from './../integrations/react/date-picker';

// Estilos del componente que acabamos de incluir en el proyecto
import reactDayPickerStyles from './../../../../node_modules/react-day-picker/dist/style.css?inline';
import calendarDatePicker from './../../../../node_modules/react-modern-calendar-datepicker/lib/DatePicker.css?inline';

import { QHelloReact } from '../integrations/react/hello';
import { QHelloCustomReact } from '../integrations/react/custom-hello';
import { QCounter } from '../integrations/react/counter';
import { QButton, QDisplay } from '../integrations/react/button-display';
import {
  QCalendarReactMultiplePicker,
  QCalendarReactMultiplePlusPicker,
  QCalendarReactPicker,
  QCalendarReactRangePicker,
} from '../integrations/react/calendar-datepicker';

export default component$(() => {
  useStyles$(reactDayPickerStyles);
  useStyles$(calendarDatePicker);
  const count = useSignal(0);

  // Calendar Date Picker Multiple Plus Estado
  // Iniciamos el lista de días preseleccionados
  const preSelectIndividualMultiple = useSignal([
    {
      year: 2019,
      month: 10,
      day: 2,
    },
    {
      year: 2019,
      month: 10,
      day: 15,
    },
    {
      year: 2019,
      month: 10,
      day: 30,
    },
  ]);

  // 4.- Función que pasaremos el componente React que es el hijo para actualizar el estado actual
  const setRange = $((value: any) => {
    console.log('router/index.tsx', value);
    preSelectIndividualMultiple.value = value;
  });

  return (
    <div class="container center">
      <h1>Integrando componentes React en Qwik</h1>
      <hr />
      <h2>
        1.- Saludo con <code>QHelloReact</code>
      </h2>
      <QHelloReact />
      <hr />
      <h2>
        2.- Saludo con <code>QHelloCustomReact</code>
      </h2>
      <QHelloCustomReact name="Anartz" />
      <hr />
      <h2>
        3.- Hidratando componente <code>QCounter</code>
      </h2>
      <QCounter />
      <hr />
      <h2>4.- Comunicación con dos componentes de React</h2>
      <QButton
        onClick$={() => {
          console.log('click', count.value);
          count.value++;
        }}
      />
      <QDisplay count={count.value} />
      <hr />
      <h2>5.- React Date Picker Básico</h2>
      <QDayPickerReact />
      <hr />
      <h2>6.- React Modern Calendar</h2>
      <hr />
      <div>
        <h3>Básico (Fecha fija de inicio)</h3>
        <QCalendarReactPicker />
        <hr />
        <h3>Rango</h3>
        <QCalendarReactRangePicker />
        <hr />
        <h3>Selección múltiple</h3>
        <QCalendarReactMultiplePicker />
        <hr />
        <h3>Selección múltiple Plus almacenando estado en Qwik</h3>
        <p>Elementos seleccionados: {preSelectIndividualMultiple.value.length}</p>
          <br/>
        <QCalendarReactMultiplePlusPicker
          selections={preSelectIndividualMultiple.value}
          setSelectedDayRange={setRange}
        />
        <hr />
      </div>
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
