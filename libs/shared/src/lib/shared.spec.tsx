import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Shared } from './shared';

test(`[Shared Component]: Should render`, async () => {
  const { screen, render } = await createDOM();
  await render(<Shared />);
  expect(screen.innerHTML).toContain('Shared works!');
});
