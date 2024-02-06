import { useEffect, useState } from 'react';
import axios from 'axios';
import { useValidation } from '@/hooks/useValidation';
import { usePassInput } from '@/hooks/usePassInput';
import {
  AuthForm,
  Button,
  FormWrapper,
  InputWrapper,
  InputLabel,
  ValidationLabel,
  OpenPasswordButton,
  PasswordImg,
} from '@/components/ControlledForm/index.styles';

export default function ControlledForm() {
  const { formik } = useValidation();
  const { typeInput, passImg, handlePassInput } = usePassInput();

  const currentUrl = `${document.location.protocol}//${document.location.host}`;
  const GITHUB_CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
  const gitHubRedirectURL = `${currentUrl}/.netlify/functions/api/github`;
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

  return (
    <AuthForm onSubmit={formik.handleSubmit}>
      <InputWrapper>
        <InputLabel htmlFor="email">Email</InputLabel>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          placeholder={formik.values.email}
        />
        <ValidationLabel>{formik.errors.email}</ValidationLabel>
      </InputWrapper>
      <InputWrapper>
        <InputLabel htmlFor="password">Password</InputLabel>
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
        <ValidationLabel>{formik.errors.password}</ValidationLabel>
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
        <h1>Welcome {user.login}</h1>
      )}
    </AuthForm>
  );
}
