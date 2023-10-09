import { qwikify$ } from '@builder.io/qwik-react';

import { CalendarReactMultiplePlusPicker } from './react';

// Convertimos el componente React en un componente Qwik
export const QCalendarReactMultiplePlusPicker = qwikify$(CalendarReactMultiplePlusPicker, {
  eagerness: 'hover',
});