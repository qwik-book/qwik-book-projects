import { $, useSignal, useStore, useVisibleTask$} from "@builder.io/qwik";

export function useLocalStorage(key: string, loadingValue: boolean = true) {
  const data = useStore<{key: string, value: any[]}>({
    key,
    value: []
  });

  const loading = useSignal(loadingValue);
  useVisibleTask$(() => {
    const localData = localStorage.getItem(data.key) as any;
    if (localData) {
      data.value = JSON.parse(localData);
    }
    loading.value =  false;
  });

  const set = $(async(saveData: any) => {
    data.value = saveData;
    localStorage.setItem(data.key, JSON.stringify(saveData));
  });

  const get = $(() => {
    return data.value;
  });

  const clear = $((initValue = []) => {
    data.value = initValue;
    data.key = key;
    localStorage.removeItem(data.key);
  });

  return {
    set,
    get,
    clear,
    data,
    loading
  };
}