import styled from '@emotion/styled';

export const TogglerContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0 0.75rem;

  input[type='checkbox'] {
    display: none;
  }
`;

export const Toggler = styled.span<{ isToggled: boolean }>`
  position: absolute;
  cursor: pointer;
  background-color: #f1dec8;
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  ${(props) =>
    props.isToggled &&
    `
      	background-color: #2bc6ff;
  	`};

  &:before {
    position: absolute;
    content: '';
    left: 3px;
    top: 3px;
    width: 20px;
    height: 20px;
    background-color: #ea8933;
    border-radius: 50%;
    transition: all 0.5s ease;
    ${(props) =>
      props.isToggled &&
      `
      	transform: translateX(25px);
  			background-color: #e8c255;
  		`};
  }
`;

export const IconContainer = styled.div<{ right?: boolean; left?: boolean }>`
  position: absolute;
  top: 50%;
  ${(props) => props.right && `right: 2px;`};
  ${(props) => props.left && `left: 3px;`};
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 170;
`;
