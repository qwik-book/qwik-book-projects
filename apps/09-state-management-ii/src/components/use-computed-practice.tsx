import {
  component$,
  useComputed$,
  useStore,
  useStyles$,
  $
} from '@builder.io/qwik';

export const UseComputedPractice = component$(() => {
    useStyles$(`
    button, .no-checked{
      background: red;
      color: white;
      border-radius: 1rem;
      font-size: 2rem;
    }

    .checked {
      background: green;
    }
  `);
  const myHobbiesList = useStore({
    options: [
      {
        label: 'Running',
        checked: true,
      },
      {
        label: 'Trail Running',
        checked: true,
      },
      {
        label: 'Football',
        checked: false,
      },
      {
        label: 'Gym',
        checked: true,
      },
      {
        label: 'Basketball',
        checked: false,
      },
      {
        label: 'Handball',
        checked: true,
      },
    ],
  });

  const optionsSelectChange = $((index: number) => {
    myHobbiesList.options[index].checked =
      !myHobbiesList.options[index].checked;
  });

  // Primero filtra los activos y luego obtiene solo los labels de esos resultados
  const mySelectHobbies = useComputed$(() =>
    myHobbiesList.options
      .filter((item) => item.checked)
      .map((item) => item.label)
  );

  return (
    <>
      <h1>7.- Use State Management - useComputed$ - Practice 👋</h1>
      {myHobbiesList.options.map((value, index) => (
        <button
          key={value.label}
          class={value.checked ? 'checked' : 'no-checked'}
          onClick$={() =>
            optionsSelectChange(index)
          }
        >
          {value.label}
        </button>
      ))}
      <h4>Mis hobbies actuales</h4>
      {JSON.stringify(mySelectHobbies.value)}
    </>
  );
});
