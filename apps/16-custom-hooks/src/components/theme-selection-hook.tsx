import { component$ } from '@builder.io/qwik';
import {useTheme} from './../hooks/useTheme';

export const ThemeSelection = component$(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>3.- Hook useTheme</h1>
      <p>Tema seleccionado: {theme.value}</p>
      <button onClick$={toggleTheme}>Cambiar</button>
    </div>
  );
});