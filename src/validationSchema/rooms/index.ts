import * as yup from 'yup';

export const roomValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().nullable(),
  capacity: yup.number().integer().nullable(),
  description: yup.string().nullable(),
});
