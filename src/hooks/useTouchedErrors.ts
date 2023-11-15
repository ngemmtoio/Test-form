import { useMemo } from 'react';

export function getTouchedError(form: any, name: string) {
  if (form.touched[name] && form.errors[name]) {
    return form.errors[name];
  }

  return '';
}

export function useTouchedErrors<T>(form: any): T {
  let touchedErrors = useMemo(
    () =>
      Object.keys(form.values).reduce(
        (acc, cur) => ({ ...acc, [cur]: getTouchedError(form, cur) }),
        {} as T,
      ),
    [form],
  );

  return touchedErrors;
}
