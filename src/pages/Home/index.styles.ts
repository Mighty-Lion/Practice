import styled from '@emotion/styled';

export const FormWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const AuthForm = styled.form`
  display: grid;
  grid-gap: 10px;
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 15px;
  align-items: center;
  width: 100%;
  min-width: 300px;
  max-width: 1000px;

  label {
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: white;
  }

  input {
    padding: 0 5px;
    border: none;
    height: 50px;
    width: 100%;
    border-radius: 5px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: #626161;

    &::placeholder {
      font-family: Roboto, sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      color: #626161
    }
  }
`;

export const Button = styled.button`
  display: flex;
	align-items: center;
	justify-content: center;
  margin: 0 auto;
  border: none;
  padding: 0 5px;
	height: 40px;
  width: 100%;
	
  border-radius: 5px;
  background: #eae5e5;
  cursor: pointer;
  transition: all 0.5s;

  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: black;

  &:hover,
  &:focus {
    background: #ababab;
  }

  &:active {
    background: #8e8e8e;
  }
`;
