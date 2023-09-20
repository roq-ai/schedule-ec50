import * as yup from 'yup';

export const activityValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  room_id: yup.string().nullable().required(),
});
