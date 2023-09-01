import { qwikify$ } from '@builder.io/qwik-react';

import { Button, Display } from './react';

// Este necesita hidratarse para interactuar
export const QButton = qwikify$(Button, { eagerness: 'hover' });
export const QDisplay = qwikify$(Display);
