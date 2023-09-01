/** @jsxImportSource react */
function Button({ onClick }: { onClick: () => void }) {
  console.log('React <Button/> Render');
  return <button onClick={onClick}>+1</button>;
}

function Display({ count }: { count: number }) {
  console.log('React <Display count=' + count + '/> Render');
  return <p className='react'>Count: {count}</p>;
}
export {Button, Display};