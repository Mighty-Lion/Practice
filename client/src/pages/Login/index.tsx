import { useEffect } from 'react';
import {
  Button,
  AuthForm,
  FormWrapper,
  InputWrapper,
  OpenPasswordButton,
  PasswordImg,
  LabelForValidate,
  LabelForInput,
} from '@/pages/Login/index.styles';
import { useValidation } from '@/hooks/useValidation';
import { usePassInput } from '@/hooks/usePassInput';

export default function Login() {
  const { formik } = useValidation();
  const { typeInput, passImg, handlePassInput } = usePassInput();
  const apiUrl = import.meta.env.VITE_API_URL;
  const apiClientId = import.meta.env.VITE_API_CLIENT_ID;

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const codeParam = urlParams.get('code');
    console.log(codeParam);
  }, []);

  const loginWithGithub = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${apiClientId}`
    );
  };

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
        <Button type="button" onClick={loginWithGithub}>
          Login with Github
        </Button>
      </AuthForm>
    </FormWrapper>
  );
}
