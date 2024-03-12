import styled from '@emotion/styled';

export const DropDownWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 10px;
  right: -50px;
  border: 1px solid var(--border-color);
  width: 50px;
  max-height: ${(props) => (props.isOpen ? 'auto' : '27px')};
  border-radius: 5px;
  overflow: hidden;
  background: var(--header-background);
  transition: var(--transition-background-color);
  cursor: pointer;
`;

export const DropDownHeader = styled.div`
  height: 27px;
  font-size: 15px;
  text-align: center;
  vertical-align: center;
  color: var(--primary-text-color);
  transition: var(--transition-color);
`;

export const DropDownList = styled.div`
  width: 100%;
  height: auto;
  background: var(--header-background);
`;

export const DropDownItem = styled.div`
  width: 100%;
  height: 27px;
  font-size: 15px;
  text-align: center;
  vertical-align: center;
  color: var(--primary-text-color);
  transition: var(--transition-color);

  &:hover,
  &:focus {
    background: var(--primary-hover);
  }
`;
