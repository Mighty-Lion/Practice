import { useTranslation } from 'react-i18next';
import { NavbarWrapper, NavbarList, NavbarListLink } from './index.styles';
import { Container } from '../../index.styles';
import { useAuthorization } from '@/hooks/useAuthorization';
import { Toggle } from '@/components/Toggle';
import { Text } from '@/components/Text/index.styles';
import { DropdownForLanguages } from '../../../DropDown';

export function Header() {
  const { isAuthorized } = useAuthorization();
  const { t } = useTranslation();
  return (
    <NavbarWrapper>
      <Container>
        <NavbarList>
          <NavbarListLink to="/">{t('linkToThePage.home')}</NavbarListLink>
          <NavbarListLink to="/admin">
            {t('linkToThePage.admin')}
          </NavbarListLink>
          {isAuthorized ? (
            <NavbarListLink to="/logout">
              {t('linkToThePage.logout')}
            </NavbarListLink>
          ) : (
            <NavbarListLink to="/login">
              {t('linkToThePage.login')}
            </NavbarListLink>
          )}
          <Text>{t('date.time', { date: new Date() })}</Text>
          <DropdownForLanguages />
          <Toggle />
        </NavbarList>
      </Container>
    </NavbarWrapper>
  );
}
