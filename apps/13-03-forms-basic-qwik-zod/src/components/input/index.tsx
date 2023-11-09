import { component$ } from '@builder.io/qwik';

export interface IndexProps {
  type: 'email' | 'text' | 'number';
  name: string;
  placeholder: string;
  error: boolean;
}

export const InputElement = component$<IndexProps>((props) => {
  const { type, name, placeholder, error } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      class={`formbold-form-input ${error ? 'invalid-field' : ''}`}
      required
    />
  );
});
