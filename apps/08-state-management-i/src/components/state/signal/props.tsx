import { component$, useSignal } from '@builder.io/qwik';

export const Parent = component$(() => {
  const multiplyValue = useSignal(1);
  return (
    <div style='border: 2px solid red; padding: 5px'>
      <input
        value={multiplyValue.value}
        onInput$={(ev) =>
          (multiplyValue.value = +(ev.target as HTMLInputElement).value)
        }
      />
      <p>Valor a multiplicar: {multiplyValue.value} </p>
      <Child multiplyValue={multiplyValue} />
    </div>
  );
});

export const Child = (props: any) => {
  const { multiplyValue } = props;
  return (
    <div style='border: 2px solid green'>
      <p>Tabla de multiplicación: {multiplyValue.value}</p>
      <ul>
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <li>
              {multiplyValue.value} * {index + 1} ={' '}
              {multiplyValue.value * (index + 1)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
