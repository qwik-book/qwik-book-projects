import { component$, $ } from '@builder.io/qwik';
import { GameProps } from '~/models/game';
import { Image } from './image';

export default component$((store: GameProps) => {
  const getComputerChoice = $(async () => {
    const choices = ['r', 'p', 's']; // Roca, Pape, Tijeras
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  });
  const gamePlay = $(
    async (userChoice: string): Promise<void> => {
      const playUserComp = userChoice + (await getComputerChoice());
      console.log(`Attempt in progress: ${playUserComp}`);
      let playStatus: {
        message: string;
        userAdd: number;
        compAdd: number;
      } = {
        message: '',
        userAdd: 0,
        compAdd: 0,
      };
      switch (playUserComp) {
        // Ganamos
        case 'rs':
        case 'sp':
        case 'pr':
          playStatus = {
            message: 'You beat the computer',
            userAdd: 1,
            compAdd: 0,
          };
          break;
        // Gana la computadora
        case 'rp':
        case 'ps':
        case 'sr':
          playStatus = {
            message: 'Win the computer',
            userAdd: 0,
            compAdd: 1,
          };
          break;
        // Empatamos
        case 'rr':
        case 'pp':
        case 'ss':
          playStatus = {
            message: 'You have chosen the same play and you have tied',
            userAdd: 0,
            compAdd: 0,
          };
          break;
      }

      store.game.data = {
        ...store.game.data,
        result: playStatus.message,
        pointsUser: store.game.data.pointsUser + playStatus.userAdd,
        pointsComp: store.game.data.pointsComp + playStatus.compAdd,
      };
    }
  );
  return (
    <div class='choices'>
      <div class='choice' onClick$={() => gamePlay('r')}>
        <Image
          width={100}
          height={100}
          src={store.game.choices.rock.img}
          alt={store.game.choices.rock.alt}
        />
      </div>
      <div class='choice' onClick$={() => gamePlay('p')}>
        <Image
          width={100}
          height={100}
          src={store.game.choices.paper.img}
          alt={store.game.choices.paper.alt}
        />
      </div>
      <div class='choice' onClick$={() => gamePlay('s')}>
        <Image
          width={100}
          height={100}
          src={store.game.choices.scissors.img}
          alt={store.game.choices.scissors.alt}
        />
      </div>
    </div>
  );
});
