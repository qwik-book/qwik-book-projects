export interface GameStore {
  data: {
    result: string;
    pointsUser: number;
    pointsComp: number;
  };
  choices: {
    imageProperties: {
      width: number;
      height: number;
    }
    rock: {
      img: string;
      alt: string;
    },
    paper: {
      img: string;
      alt: string;
    },
    scissors: {
      img: string;
      alt: string;
    }
  }
}

export interface GameProps {
  game: GameStore;
}