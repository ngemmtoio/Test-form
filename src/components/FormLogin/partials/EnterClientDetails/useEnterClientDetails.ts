import { useMemo } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTouchedErrors } from '../../../../hooks';
import { countryData } from '../helpers';
import { IDataUser } from '../../../../entities';

let validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('This is a required field')
    .min(3, 'Minimum length - 3 characters')
    .max(50, 'Maximum length - 50 characters')
    .matches(/^[a-zA-Zа-яА-ЯёЁ]+$/, 'The name can only contain letters'),
  phoneNumber: yup.string().required('This is a required field'),
  country: yup.string().required('This is a required field'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('This is a required field'),
});

interface IUseEnterClientDetails {
  dataUser: (v: IDataUser) => void;
}

export function useEnterClientDetails({ dataUser }: IUseEnterClientDetails) {
  let form = useFormik({
    initialValues: {
      name: '',
      email: '',
      country: 'USA' || '',
      phoneNumber: '',
    },
    onSubmit: (values) => {
      dataUser({
        name: values.name,
        email: values.email,
        country: values.country,
        phoneNumber: values.phoneNumber,
      });
    },
    validationSchema,
  });

  let touchedErrors = useTouchedErrors<typeof form.values>(form);

  let isValid = useMemo(
    () => form.isValid && form.dirty,
    [form.dirty, form.isValid],
  );

  let getPhoneMask = useMemo(() => {
    return () => {
      let country = form.values.country as keyof typeof countryData;
      return countryData[country]?.mask;
    };
  }, [form.values.country]);

  let handleCountryChange = useMemo(() => {
    return (event: React.ChangeEvent<HTMLSelectElement>) => {
      let selectedCountry = event.target.value;
      form.handleChange(event);
      if (selectedCountry !== form.values.country) {
        form.setFieldValue('phoneNumber', '');
      }
    };
  }, [form]);

  let renderedSelectCountry = useMemo(
    () =>
      (Object.keys(countryData) as Array<keyof typeof countryData>).map(
        (countryKey) => ({
          value: countryKey,
          label: countryData[countryKey].label,
        }),
      ),
    [],
  );

  return {
    form,
    touchedErrors,
    isValid,
    getPhoneMask,
    handleCountryChange,
    renderedSelectCountry,
  };
}
