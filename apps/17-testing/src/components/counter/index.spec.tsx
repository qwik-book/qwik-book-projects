import { createDOM } from '@builder.io/qwik/testing'; // importa el método createDOM
import { describe, expect, it } from 'vitest';
import { Counter } from '.';

describe('Componente Counter', function () {
  it('debería representarse correctamente', async () => {
    // crea el DOM del componente y obtén el contenedor y un método de representación
    const { screen, render } = await createDOM();

    // llama al método de representación con el nodo JSX de nuestro componente Counter como parámetro
    await render(<Counter />);

    // obtén el div que muestra el contador de nuestro contenedor
    const countElement = screen.querySelector('.count');

    // asegura que el contador mostrado sea "0", que es el valor predeterminado
    expect(countElement?.textContent).toBe('0');
  });
});
