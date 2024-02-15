import styled from '@emotion/styled';

export const ToggleContainer = styled.div`
  position: absolute;
  top: 2em;
  right: 2em;
`;

export const Toggle = styled.input`
  visibility: hidden;
  & + label {
    display: flex;
    align-items: center;
    font-size: 1.5em;
    cursor: pointer;
    color: var(--primary-text-color);
  }

  & + label::before {
    content: '';
    height: 1em;
    width: 2em;
    border-radius: 1em;
    background-color: var(--toggle-bg);
    margin-right: 0.5em;
    transition: background-color 250ms ease-in-out;
  }
  & + label::after {
    content: '';
    height: 0.8em;
    width: 0.8em;
    border-radius: 1em;
    background-color: var(--toggle-fg);
    position: absolute;
    left: 0.2em;
    transition: background-color 250ms ease-in-out, transform 250ms ease-in-out;
  }

  &:checked + label::after {
    transform: translateX(100%);
  }
`;
