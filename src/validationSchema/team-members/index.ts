import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  team_name: yup.string().required(),
  role: yup.string().nullable(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
