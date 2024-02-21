import { useTranslation } from 'react-i18next';
import { NavbarWrapper, NavbarList, NavbarListLink } from './index.styles';
import { Container } from '../../index.styles';
import { useAuthorization } from '@/hooks/useAuthorization';
import { Toggle } from '@/components/Toggle';
import { Text } from '@/components/Text/index.styles';

export function Header() {
  const { isAuthorized } = useAuthorization();
  const { t } = useTranslation();
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
          <Text>
            {t('date.time', { date: new Date() })}
          </Text>
          <Toggle />
        </NavbarList>
      </Container>
    </NavbarWrapper>
  );
}
