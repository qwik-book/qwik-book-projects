import { component$ } from '@builder.io/qwik';
import { ValidationMessage } from '../validation-message';

export interface InputFieldProps {
  name: string;
  label: string;
  type: string;
  value: any;
  required?: boolean;
  errorMessage?: string;
}

export const InputField = component$<InputFieldProps>((props) => {
  const { name, label, type, value, required, errorMessage } = props;
  return (
    <>
      <label>
        <input
          class={`input ${errorMessage ? 'invalid-class' : ''}`}
          type={type}
          name={name}
          required={required}
          value={value}
        />
        <span class={errorMessage ? 'invalid-class' : undefined}>{label}</span>
      </label>
      {errorMessage && <ValidationMessage message={errorMessage} />}
    </>
  );
});
