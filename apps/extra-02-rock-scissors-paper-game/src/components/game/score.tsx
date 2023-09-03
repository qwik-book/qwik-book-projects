
import { ScoreBoardProps } from '~/models/score-board';

export const Score = (props: ScoreBoardProps) => {
  const { user, computer } = props;
  return (
    <>
      <span id='user-score'>{user}</span>:
      <span id='comp-score'>{computer}</span>
    </>
  );
};
