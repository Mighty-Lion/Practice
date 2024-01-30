import {
  Button,
  AuthForm,
  FormWrapper,
  InputWrapper,
  OpenPasswordButton,
  PasswordImg,
} from '@/pages/Login/index.styles';
import { useValidation } from '@/hooks/useValidation';
import { usePassInput } from '@/hooks/usePassInput';

export default function Login() {
  const { formik } = useValidation();
  const { typeInput, passImg, handlePassInput } = usePassInput();

  return (
    <FormWrapper>
      <AuthForm onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            placeholder={formik.values.email}
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type={typeInput}
            onChange={formik.handleChange}
            placeholder={formik.values.password}
          />
          <OpenPasswordButton
            onClick={() => {
              handlePassInput();
            }}
          >
            <PasswordImg src={passImg} alt="passImg" />
          </OpenPasswordButton>
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
