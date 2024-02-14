import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  padding: 0 10px;
  height: 30px;
  width: 100%;
  max-width: 200px;
  border-radius: 5px;
  background: #646cff;
  white-space: nowrap;
  color: white;
  cursor: pointer;
  transition: all 0.5s ;

  &:hover,
  &:focus {
    background: #9a9ff9;
    color: #e6e5f2;
  }

  &:active {
    background: lightblue;
    color: white;
  }
`;
