import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  title: yup.string().required(),
  start_time: yup.date().required(),
  end_time: yup.date().required(),
  user_id: yup.string().nullable().required(),
  room_id: yup.string().nullable().required(),
});
