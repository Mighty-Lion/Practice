import { useEffect, useState } from 'react';
import {
  IconContainer,
  Toggler,
  TogglerContainer,
} from '@/components/Toggle/index.styles';
import { useTheme } from '@/hooks/useTheme';
import { themes } from '@/providers/ThemeProvider';
import { SunIcon } from '@/components/Toggle/icons/SunIcon';
import { MoonIcon } from '@/components/Toggle/icons/MoonIcon';

export function Toggle() {
  const { theme, setTheme } = useTheme();
  const [isToggled, setIsToggled] = useState(() => {
    return theme !== themes.light;
  });

  const onToggle = () => {
    setIsToggled((prev) => !prev);
    if (theme === themes.light) setTheme(themes.dark);
    if (theme === themes.dark) setTheme(themes.light);
  };

  return (
    <TogglerContainer htmlFor="toggler">
      <IconContainer left>
        <SunIcon />
      </IconContainer>
      <input
        id="toggler"
        type="checkbox"
        onChange={onToggle}
        checked={theme === themes.dark}
        readOnly
      />
      <Toggler isToggled={isToggled} />
      <IconContainer right>
        <MoonIcon />
      </IconContainer>
    </TogglerContainer>
  );
}
