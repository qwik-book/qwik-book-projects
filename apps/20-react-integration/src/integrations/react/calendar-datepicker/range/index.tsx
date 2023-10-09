import { qwikify$ } from '@builder.io/qwik-react';

import { CalendarReactRangePicker } from './react';

// Convertimos el componente React en un componente Qwik
export const QCalendarReactRangePicker = qwikify$(CalendarReactRangePicker, {
  eagerness: 'hover',
});