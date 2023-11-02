import * as yup from 'yup';

export const clinicValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  address: yup.string().nullable(),
  phone_number: yup.string().nullable(),
  opening_hours: yup.string().nullable(),
  name: yup.string().required(),
});
