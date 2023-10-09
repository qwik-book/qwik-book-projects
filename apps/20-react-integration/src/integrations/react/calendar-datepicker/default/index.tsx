import { qwikify$ } from '@builder.io/qwik-react';

import { CalendarReactPicker } from './react';

// Convertimos el componente React en un componente Qwik
export const QCalendarReactPicker = qwikify$(CalendarReactPicker, {
  eagerness: 'hover',
});