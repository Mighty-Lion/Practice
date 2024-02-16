import { NavbarWrapper, NavbarList, NavbarListLink } from './index.styles';
import { Container } from '../../index.styles';
import { useAuthorization } from '@/hooks/useAuthorization';
import { Toggle } from '@/components/Toggle';

export function Header() {
  const { isAuthorized } = useAuthorization();
  return (
    <NavbarWrapper>
      <Container>
        <NavbarList>
          <NavbarListLink to="/">Home</NavbarListLink>
          <NavbarListLink to="/admin">Admin</NavbarListLink>
          {isAuthorized ? (
            <NavbarListLink to="/logout">Logout</NavbarListLink>
          ) : (
            <NavbarListLink to="/login">Login</NavbarListLink>
          )}
        <Toggle />

        </NavbarList>
      </Container>
    </NavbarWrapper>
  );
}
