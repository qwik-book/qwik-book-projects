import { qwikify$ } from '@builder.io/qwik-react';

import { DayPickerReact } from './react';

// Convertimos el componente React en un componente Qwik
export const QDayPickerReact = qwikify$(DayPickerReact, {
  eagerness: 'visible',
});
