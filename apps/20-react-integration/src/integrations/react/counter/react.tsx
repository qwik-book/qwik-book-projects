/** @jsxImportSource react */
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button className='react' onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
