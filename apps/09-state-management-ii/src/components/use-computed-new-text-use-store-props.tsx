import {
  Signal,
  component$,
  useComputed$,
  useSignal,
  useStore,
  useStyles$,
} from '@builder.io/qwik';

export const UseComputedNewTextUseStoreProps = component$(() => {
  useStyles$(`
    button {
      background: red;
    }
  `);
  const infoDataStore = useStore({
    list: [
      { name: 'Anartz', lastname: 'Mugika' },
      { name: 'Ruslan', lastname: 'González' },
      { name: 'Bezael', lastname: 'Pérez' },
      { name: 'Leifer', lastname: 'Mendez' },
    ],
    select: { name: 'Anartz', lastname: 'Mugika' },
  });
  const indexSelect = useSignal(0);
  const nameLastnameText = useComputed$(
    () => `${infoDataStore.select.name} ${infoDataStore.select.lastname}`
  );
  return (
    <>
      <h1>
        5.- Use State Management - useComputed$ - Combinación de textos - useStore + props👋
      </h1>
      <p>
        Valor índice para seleccionar persona con <code>useSignal</code>:{' '}
        {indexSelect.value}
      </p>
      <p>
        Valor con <code>useComputed$</code>: {nameLastnameText.value}
      </p>
      <button
        onClick$={() => {
          // Seleccionamos primero el índice
          indexSelect.value =
            indexSelect.value === infoDataStore.list.length - 1
              ? 0
              : indexSelect.value + 1;
          // Almacenamos el valor seleccionado de la lista de personas
          // Esto hará que notifique el cambio en infoDataStore
          infoDataStore.select = infoDataStore.list[indexSelect.value];
        }}
      >
        {' '}
        + 1
      </button>
      <ChildComponent data={nameLastnameText}/>
    </>
  );
});

export const ChildComponent = component$((props: {data: Signal<string>}) => {
  useStyles$(`
    .child {
      border: 2px dotted green;
    }
  `)
  return <p class="child">Pasando con props: {props.data.value}</p>
});
