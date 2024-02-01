import * as Yup from 'yup';
import { useFormik } from 'formik';

const validateEmail = (email: string | undefined) => {
  return Yup.string().email().isValidSync(email);
};

const loginValidationSchema = Yup.object({
  email: Yup.string()
    .required('Email / Phone is required')
    .test('emailorphone', 'Email / Phone is invalid', (value) => {
      return validateEmail(value);
    }),
  password: Yup.string()
    .required('Password cannot be empty')
    .min(6, 'Password must be at least 6 char'),
});

export function useValidation() {
  const formik = useFormik({
    initialValues: {
      id: undefined,
      email: 'Почта',
      password: 'Пароль',
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log('Submit');
      console.log(values);
    },
  });

  return { formik };
}
