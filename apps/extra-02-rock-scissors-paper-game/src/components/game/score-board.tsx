import { Badge } from './badge';
import { Score } from './score';
import { ScoreBoardProps } from '~/models/score-board';

export const ScoreBoard = (props: ScoreBoardProps) => {
  const { user, computer } = props;
  return (
    <div class='score-board'>
      <Badge id={'user-label'} label={'User'} />
      <Badge id={'comp-label'} label={'Comp'} />
      <Score user={user} computer={computer} />
    </div>
  );
};
