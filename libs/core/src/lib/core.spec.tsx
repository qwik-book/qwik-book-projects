import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Core } from './core';

test(`[Core Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Core />);
  expect(screen.innerHTML).toContain('Core works!');
});