import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: var(--header-background);
	transition: var(--transition-background-color);
  z-index: 100;
`;

export const NavbarList = styled.nav`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
  padding: 10px 0;
`;

export const NavbarListLink = styled(Link)`
  font-size: 1rem;
	color: var(--primary-text-color);
	transition: var(--transition-color);
`;
