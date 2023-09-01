import { qwikify$ } from "@builder.io/qwik-react";
    
import { Counter } from "./react";

// Convertimos el componente React en un componente Qwik
export const QCounter = qwikify$(Counter, { eagerness: 'hover' });
