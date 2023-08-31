import { component$, useStyles$ } from '@builder.io/qwik';
import { AlertProps } from '../../models';

import alertStyles from './style.css?inline';
export const Alert = component$<AlertProps>((data: AlertProps) => {
    useStyles$(alertStyles);
  return <div class={"alert alert-" + data.type}>{data.text}</div>
});