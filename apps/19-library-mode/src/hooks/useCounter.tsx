import { useSignal, $ } from "@builder.io/qwik";

const useCounter = (initialValue = 0) => {
  const counter = useSignal(initialValue);
  const increment = $(() => counter.value++);
  const decrement = $(() => counter.value--);
  const reset = $(() => (counter.value = 0));

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

export { useCounter };
