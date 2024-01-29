import {
  Button,
  AuthForm,
  FormWrapper,
  InputWrapper,
} from '@/pages/Home/index.styles';
import { useValidation } from '@/hooks/useValidation';

export default function Home() {
  const { formik } = useValidation();
  return (
    <FormWrapper>
      <AuthForm onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </InputWrapper>
        <Button
          type="submit"
          onClick={() => {
            console.log('click');
          }}
        >
          Submit
        </Button>
      </AuthForm>
    </FormWrapper>
  );
}
