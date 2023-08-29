import { component$, useStylesScoped$ } from '@builder.io/qwik';

import styles from './core.css?inline';


  
export const Core = component$(()=>{

  
  useStylesScoped$(styles);
  
  return <>
    Core works!
  </>;
});