import { BadgeProps } from '~/models/badge';

export const Badge = (props: BadgeProps) => {
  const { id, label } = props;
  return (
    <div id={id} class='badge'>
      {label}
    </div>
  );
};
