import { qwikify$ } from '@builder.io/qwik-react';

import {HelloCustomReact} from './react';
    
// Convertimos el componente React en un componente Qwik
export const QHelloCustomReact = qwikify$(HelloCustomReact);