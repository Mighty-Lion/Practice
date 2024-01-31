import {
  Button,
  AuthForm,
  FormWrapper,
  InputWrapper,
  OpenPasswordButton,
  PasswordImg, LabelForValidate, LabelForInput,
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
          <LabelForInput htmlFor="email">Email</LabelForInput>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            placeholder={formik.values.email}
          />
          <LabelForValidate>{formik.errors.email}</LabelForValidate>
        </InputWrapper>
        <InputWrapper>
          <LabelForInput htmlFor="password">Password</LabelForInput>
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
          <LabelForValidate>{formik.errors.password}</LabelForValidate>
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
