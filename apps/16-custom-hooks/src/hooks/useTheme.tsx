import { useSignal, $, useVisibleTask$, useStyles$ } from '@builder.io/qwik';

const useTheme = () => {
  // 1
  const theme = useSignal('light');

  // 2
  useStyles$(`
    .dark {
      background: #1d2033;
      color: white;
    }
    .light {
      background: white;
      color: black;
    }
  
    .light, .dark, body {
      padding: 1rem;
    }
  `);

  // 3
  useVisibleTask$(({ track }) => {
    track(() => theme.value);
    if (document) {
      // Eliminamos las dos clases antes de asignarle la elegida
      document.body.classList.remove('dark', 'light');
      // Añadimos la variante seleccionada
      document.body.classList.add(theme.value);
    }
  });

  // 4
  const toggleTheme = $(() => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  });

  // 5
  return {
    theme,
    toggleTheme,
  };
};

export { useTheme };
