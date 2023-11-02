import * as yup from 'yup';

export const insuranceValidationSchema = yup.object().shape({
  provider_name: yup.string().required(),
  policy_number: yup.string().required(),
  coverage_start_date: yup.date().required(),
  coverage_end_date: yup.date().required(),
  coverage_details: yup.string().nullable(),
  patient_id: yup.string().nullable().required(),
});
