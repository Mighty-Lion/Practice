import { useEffect, useState } from 'react';
import axios from 'axios';
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

  const currentUrl = `${window.location.protocol}//${window.location.host}`;
  console.log(currentUrl);
  const GITHUB_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const gitHubRedirectURL = `currentUrl/.netlify/functions/api/github`;
  const path = '/login';

  const [user, setUser] = useState<any>();

  useEffect(() => {
    (async function () {
      const usr = await axios
        .get(`${currentUrl}/.netlify/functions/api/me`, {
          withCredentials: true,
        })
        .then((res) => res.data);

      setUser(usr);
    })();
  }, []);

  console.log('user', user);
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
        {!user ? (
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}?path=${path}&scope=user:email`}
          >
            LOGIN WITH GITHUB
          </a>
        ) : (
          <h1>Wel
            {user.login}</h1>
        )}
      </AuthForm>
    </FormWrapper>
  );
}
