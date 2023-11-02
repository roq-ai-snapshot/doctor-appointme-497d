import * as yup from 'yup';

export const healthcareProviderValidationSchema = yup.object().shape({
  provider_name: yup.string().required(),
  provider_type: yup.string().required(),
  address: yup.string().required(),
  phone_number: yup.string().required(),
  services_offered: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
