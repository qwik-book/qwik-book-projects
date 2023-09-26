import { type PropFunction, component$, useSignal, useStyles$ } from '@builder.io/qwik';
 
export const PropFunctionPractice = component$(() => {
  const counter = useSignal(0);
  useStyles$(`
    b {
      font-size: 2.5rem;
    }
  `)
  return <div>
    <p>Valor actual del contador: <b>{counter.value}</b></p>
    <p>A continuación vamos a añadir dos botones reutilizando el componente <code>Button</code></p>
    <p><Button onClick$={() => counter.value += 1} label="+1" /> <Button onClick$={() => counter.value -= 1} label="-1" /></p>
  </div>;
});
 
export const Button = component$<{
  // Important to tell TypeScript that this is async
  onClick$?: PropFunction<() => void>;
  label: string;
}>((props) => {
  return (
    <button onClick$={props.onClick$}>
      {props.label}
    </button>
  );
});