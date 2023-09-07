import {
  Signal,
  component$,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from '@builder.io/qwik';

export const UseVisibleTask = component$(() => {
  const isClockRunning = useSignal(false);

  return (
    <>
      <div style='position: sticky; top:0'>
        Haz scroll para poder ver el reloj. (El reloj se encuentra:
        {isClockRunning.value ? ' EN MARCHA' : ' NO ESTÁ EN MARCHA'}.)
      </div>
      <div style='height: 200vh' />
      <Clock isRunning={isClockRunning} />
    </>
  );
});

const Clock = component$<{ isRunning: Signal<boolean> }>(({ isRunning }) => {
    useStyles$(`
        #clock {
            margin-bottom: 200px;
            font-size: 100px;
            text-align: center;
        }
    `);
  // 1
  const time = useSignal('El reloj se va a poner en marcha...');

  // 2
  useVisibleTask$(({ cleanup }) => {
    console.log('CLOCK - ¡¡Esta parte es visible!!');

    // 3
    isRunning.value = true;

    // 4
    const update = () => (time.value = new Date().toLocaleTimeString());

    // 5
    const timerId = setInterval(update, 1000);

    // 6
    cleanup(() => clearInterval(timerId));
  }, /*{ strategy: 'document-ready' }*/);

  // Dentro de useVisibleTask$ introducimos { strategy: 'document-ready' } en modo eagerness

  // 7
  return <div id='clock'>{time.value}</div>;
});
