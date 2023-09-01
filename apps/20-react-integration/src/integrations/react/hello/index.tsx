import { qwikify$ } from '@builder.io/qwik-react';
    
// Usamos en el componente de react creado
import { HelloReact } from './react';
    
// Convertimos el componente React en un componente Qwik
export const QHelloReact = qwikify$(HelloReact);