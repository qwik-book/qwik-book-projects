import { component$ } from '@builder.io/qwik';

export interface IndexProps {
  message: string
}

export const ValidationMessage = component$<IndexProps>((props) => {
  return (
    <div class="invalid-message">
        {props.message}
    </div>
  );
});