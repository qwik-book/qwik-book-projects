import { type PropFunction, component$ } from '@builder.io/qwik';
 
export const PropFunctionExample = component$(() => {
  return <Button onClick$={() => alert('CLICKED!')} label="Púlsame para ver lo que ocurre :)" />;
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