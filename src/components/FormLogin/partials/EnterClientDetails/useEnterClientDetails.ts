import { useMemo } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import useSWR from 'swr';
import axios from 'axios';
import { useTouchedErrors } from '../../../../hooks';
import { IDataUser } from '../../../../entities';

let validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('This is a required field')
    .min(4, 'Minimum length - 4 characters')
    .max(12, 'Maximum length - 12 characters'),
  phoneNumber: yup
    .string()
    .required('This is a required field')
    .min(18, 'Wrong phone number'),
  country: yup.string().required('This is a required field'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('This is a required field'),
});

interface IUseEnterClientDetails {
  setDataUser: (v: IDataUser) => void;
}

export function useEnterClientDetails({ setDataUser }: IUseEnterClientDetails) {
  let getCountries = async () => {
    let response = await axios.get('https://namaztimes.kz/ru/api/country');
    return response.data;
  };

  let { data: dataCountries, isLoading } = useSWR('countries', getCountries);

  let form = useFormik({
    initialValues: {
      name: '',
      email: '',
      country: '',
      phoneNumber: '',
    },
    onSubmit: (values) => {
      setDataUser({
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

  let renderedSelectCountry = useMemo(() => {
    if (!dataCountries) {
      return [];
    }

    return Object.keys(dataCountries).map((countryKey) => ({
      value: dataCountries[countryKey],
      label: dataCountries[countryKey],
    }));
  }, [dataCountries]);

  return {
    form,
    touchedErrors,
    isValid,
    renderedSelectCountry,
    isLoading,
  };
}
