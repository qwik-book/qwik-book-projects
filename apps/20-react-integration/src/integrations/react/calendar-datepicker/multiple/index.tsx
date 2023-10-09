import { qwikify$ } from '@builder.io/qwik-react';

import { CalendarReactMultiplePicker } from './react';

// Convertimos el componente React en un componente Qwik
export const QCalendarReactMultiplePicker = qwikify$(CalendarReactMultiplePicker, {
  eagerness: 'hover',
});