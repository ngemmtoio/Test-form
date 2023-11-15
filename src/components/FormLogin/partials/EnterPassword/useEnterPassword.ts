import { useMemo } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTouchedErrors } from '../../../../hooks';

let validationSchema = yup.object().shape({
  password: yup
    .string()
    .required('This is a required field')
    .min(5, 'Password must be at least 5 characters'),
  repeatPassword: yup
    .string()
    .required('This is a required field')
    .min(5, 'Password must be at least 5 characters')
    .when('password', {
      is: (password: any) => password && password.length > 0,
      then: yup.string().oneOf([yup.ref('password')], 'Passwords do not match'),
    }),
});

export function useEnterPassword() {
  let form = useFormik({
    initialValues: {
      password: '',
      repeatPassword: '',
    },
    onSubmit: () => {},
    validationSchema,
  });

  let touchedErrors = useTouchedErrors<typeof form.values>(form);

  let isValid = useMemo(
    () => form.isValid && form.dirty && form.touched.repeatPassword,
    [form.dirty, form.isValid, form.touched.repeatPassword],
  );

  return {
    form,
    touchedErrors,
    isValid,
  };
}
